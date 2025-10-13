# SSO登录页面

一个美观、现代化的SSO（单点登录）页面，支持多种第三方登录方式。

## 功能特性

- 🎨 **现代化设计** - 使用渐变背景、毛玻璃效果和流畅动画
- 🔐 **多种SSO登录** - 支持微信、支付宝、QQ、GitHub、Google、Microsoft登录
- 📱 **响应式设计** - 完美适配桌面和移动设备
- ⚡ **TypeScript支持** - 完整的类型定义和类型安全
- 🎭 **动画效果** - 丰富的交互动画和视觉反馈
- 🛡️ **安全性** - 内置CSRF保护和状态验证

## 页面预览

### 登录页面

- 渐变背景与动态blob动画
- 多种SSO登录选项
- 传统用户名/密码登录
- 记住我功能
- 忘记密码链接
- 安全提示信息

### 功能亮点

- **视觉设计**: 毛玻璃效果卡片、渐变按钮、hover动画
- **用户体验**: 加载状态、错误提示、进度反馈
- **响应式**: 移动端友好的布局和交互

## 使用方法

### 1. 访问登录页面

```
http://localhost:5173/login
```

### 2. 配置SSO提供商

创建 `.env.local` 文件并配置相应的客户端ID：

```env
# 微信登录配置
VITE_WECHAT_CLIENT_ID=your_wechat_app_id

# 支付宝登录配置
VITE_ALIPAY_CLIENT_ID=your_alipay_app_id

# QQ登录配置
VITE_QQ_CLIENT_ID=your_qq_app_id

# GitHub登录配置
VITE_GITHUB_CLIENT_ID=your_github_client_id

# Google登录配置
VITE_GOOGLE_CLIENT_ID=your_google_client_id

# Microsoft登录配置
VITE_MICROSOFT_CLIENT_ID=your_microsoft_client_id
```

### 3. 后端API集成

确保后端提供以下API端点：

```typescript
// 传统登录
POST /api/auth/login
{
  "username": "string",
  "password": "string",
  "remember": boolean
}

// SSO回调处理
POST /api/auth/sso/callback
{
  "provider": "string",
  "code": "string",
  "state": "string"
}
```

## 技术栈

- **Vue 3** - 组合式API
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Vue Router** - 路由管理
- **Iconify** - 图标库

## 文件结构

```
src/
├── views/
│   ├── Login.vue          # 主登录页面
│   └── SSOCallback.vue    # SSO回调处理页面
├── services/
│   └── sso.ts            # SSO服务类
├── config/
│   └── index.ts          # 配置文件
└── router/
    └── index.ts          # 路由配置
```

## 自定义配置

### 添加新的SSO提供商

在 `src/services/sso.ts` 中添加新的提供商配置：

```typescript
export const ssoProviders: Record<string, SSOProvider> = {
  // 现有提供商...

  newProvider: {
    name: '新提供商登录',
    icon: 'mdi-new-provider',
    color: 'bg-purple-500',
    hoverColor: 'hover:bg-purple-600',
    clientId: ssoConfig.newProvider.clientId,
    redirectUri: `${window.location.origin}/auth/newProvider/callback`,
  },
};
```

### 自定义样式

修改 `tailwind.config.js` 中的主题配置：

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // 自定义主色调
      }
    },
    animation: {
      // 自定义动画
    }
  }
}
```

## 安全注意事项

1. **HTTPS**: 生产环境必须使用HTTPS
2. **CSRF保护**: 使用state参数防止CSRF攻击
3. **Token存储**: 敏感信息存储在httpOnly cookie中
4. **输入验证**: 后端必须验证所有输入参数
5. **会话管理**: 实现适当的会话超时和刷新机制

## 开发调试

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 浏览器支持

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- 移动端浏览器

## 许可证

MIT License
