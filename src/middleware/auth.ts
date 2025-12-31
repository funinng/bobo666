import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore, type User } from '@/stores/auth';

/**
 * 认证路由守卫
 * 检查用户是否已登录，未登录则跳转到登录页
 */
export const authGuard = async (
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authStore = useAuthStore();

  // 如果已经认证，直接通过
  if (authStore.isAuthenticated) {
    next();
    return;
  }

  // 检查token是否有效
  const isValidToken = await authStore.validateToken();
  if (isValidToken) {
    next();
    return;
  }

  // 保存原始访问地址，登录成功后跳转回来
  if (to.path !== '/login') {
    authStore.setLoginRedirect(to.fullPath);
  }

  // 跳转到登录页
  next({
    path: '/login',
    query: { redirect: to.fullPath },
  });
};

/**
 * 游客路由守卫
 * 已登录用户访问登录页等公开页面时，跳转到首页
 */
export const guestGuard = async (
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const authStore = useAuthStore();

  // 如果已经认证，跳转到首页或指定页面
  if (authStore.isAuthenticated) {
    const redirect = (to.query.redirect as string) || '/';
    next(redirect);
    return;
  }

  next();
};

/**
 * 角色权限守卫
 * 检查用户是否有访问特定页面的权限
 */
export const roleGuard = (requiredRoles: string[]) => {
  return async (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const authStore = useAuthStore();

    if (!authStore.isAuthenticated) {
      next('/login');
      return;
    }

    const user = authStore.user as User;
    if (!user || !user.roles) {
      next('/unauthorized');
      return;
    }

    const hasPermission = requiredRoles.some((role) => user.roles!.includes(role));

    if (hasPermission) {
      next();
    } else {
      next('/unauthorized');
    }
  };
};

/**
 * 全局路由守卫配置
 */
export const setupRouterGuards = (router: any) => {
  // 初始化认证状态
  const authStore = useAuthStore();
  authStore.initAuth();

  // 全局前置守卫
  router.beforeEach(
    async (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      // 检查路由是否需要认证
      if (to.meta.requiresAuth !== false && to.path !== '/login' && !to.path.startsWith('/auth/')) {
        await authGuard(to, from, next);
      } else if (to.path === '/login') {
        await guestGuard(to, from, next);
      } else {
        next();
      }
    }
  );

  // 全局后置守卫 - 设置页面标题
  router.afterEach((to: RouteLocationNormalized) => {
    const title = to.meta.title as string;
    if (title) {
      document.title = `${title} - SSO统一认证系统`;
    }
  });
};
