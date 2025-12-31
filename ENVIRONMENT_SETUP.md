# 环境变量配置指南

## 概述

本系统支持多种第三方SSO登录，需要配置相应的环境变量才能正常工作。

## 环境变量配置

请在项目根目录创建 `.env` 文件并配置以下环境变量：

### SSO 配置

```bash
# GitHub OAuth 应用配置
VITE_GITHUB_CLIENT_ID=your_github_client_id_here

# Google OAuth 应用配置  
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here

# Microsoft OAuth 应用配置
VITE_MICROSOFT_CLIENT_ID=your_microsoft_client_id_here

# 微信开放平台配置
VITE_WECHAT_CLIENT_ID=your_wechat_client_id_here

# 支付宝开放平台配置
VITE_ALIPAY_CLIENT_ID=your_alipay_client_id_here

# QQ 互联配置
VITE_QQ_CLIENT_ID=your_qq_client_id_here
```

### API 配置

```bash
# 后端 API 基础URL
VITE_API_BASE_URL=http://localhost:3000/api
```

### OpenAI 配置 (可选)

```bash
# OpenAI API 密钥
VITE_OPENAI_API_KEY=your_openai_api_key_here

# OpenAI API 基础URL
VITE_OPENAI_BASE_URL=https://api.openai.com/v1

# 默认使用的模型
VITE_OPENAI_MODEL=gpt-3.5-turbo

# 是否使用代理服务
VITE_OPENAI_USE_PROXY=false

# 代理服务URL (当 USE_PROXY=true 时使用)
VITE_OPENAI_PROXY_URL=http://localhost:3001/api/openai
```

## SSO 提供商配置说明

### 1. GitHub OAuth

1. 访问 [GitHub OAuth Apps](https://github.com/settings/applications/new)
2. 创建新的 OAuth 应用
3. 设置回调URL：`http://localhost:5173/auth/github/callback`
4. 获取 Client ID 并配置到 `VITE_GITHUB_CLIENT_ID`

### 2. Google OAuth

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建项目并启用 Google+ API
3. 创建 OAuth 2.0 客户端ID
4. 设置授权重定向URI：`http://localhost:5173/auth/google/callback`
5. 获取客户端ID并配置到 `VITE_GOOGLE_CLIENT_ID`

### 3. Microsoft OAuth

1. 访问 [Azure Portal](https://portal.azure.com/)
2. 注册新的应用程序
3. 设置重定向URI：`http://localhost:5173/auth/microsoft/callback`
4. 获取应用程序ID并配置到 `VITE_MICROSOFT_CLIENT_ID`

### 4. 微信登录

1. 访问 [微信开放平台](https://open.weixin.qq.com/)
2. 注册开发者账号并创建网站应用
3. 设置授权回调域：`localhost:5173`
4. 获取 AppID 并配置到 `VITE_WECHAT_CLIENT_ID`

### 5. 支付宝登录

1. 访问 [支付宝开放平台](https://open.alipay.com/)
2. 创建网页&移动应用
3. 配置授权回调地址：`http://localhost:5173/auth/alipay/callback`
4. 获取 AppID 并配置到 `VITE_ALIPAY_CLIENT_ID`

### 6. QQ登录

1. 访问 [QQ互联](https://connect.qq.com/)
2. 创建应用并提交审核
3. 设置回调地址：`http://localhost:5173/auth/qq/callback`
4. 获取 App ID 并配置到 `VITE_QQ_CLIENT_ID`

## 快速开始

1. 复制环境变量配置：
```bash
cp .env.example .env
```

2. 编辑 `.env` 文件，填入你的配置信息

3. 启动开发服务器：
```bash
npm run dev
```

4. 访问 `http://localhost:5173/login` 测试登录功能

## 注意事项

1. **开发环境**：确保回调URL使用 `http://localhost:5173`
2. **生产环境**：需要更新回调URL为实际的域名
3. **安全性**：不要将敏感信息提交到版本控制系统
4. **HTTPS**：生产环境建议使用HTTPS协议

## 故障排除

### 常见问题

1. **回调地址不匹配**：检查各个平台配置的回调URL是否正确
2. **Client ID 未配置**：确保环境变量名称正确且已设置
3. **跨域问题**：检查API服务器的CORS配置
4. **网络问题**：确保能够访问各个SSO提供商的服务

### 调试建议

1. 打开浏览器开发者工具查看网络请求
2. 检查控制台错误信息
3. 验证环境变量是否正确加载
4. 确认后端API服务是否正常运行


