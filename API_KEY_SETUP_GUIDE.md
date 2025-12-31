# OpenAI API 密钥配置指南

## 🚨 当前问题
您遇到了 "Incorrect API key provided" 错误，这表示 API 密钥配置有问题。

## 📋 解决步骤

### 1. 获取 OpenAI API 密钥

1. 访问 [OpenAI Platform](https://platform.openai.com/)
2. 登录您的账户
3. 进入 [API Keys 页面](https://platform.openai.com/account/api-keys)
4. 点击 "Create new secret key"
5. 复制生成的密钥（格式类似：`sk-proj-...` 或 `sk-...`）

### 2. 创建环境变量文件

在项目根目录创建 `.env` 文件：

```env
# OpenAI 配置 - 请替换为您的真实 API 密钥
VITE_OPENAI_API_KEY=sk-your-real-openai-api-key-here
VITE_OPENAI_BASE_URL=https://api.openai.com/v1
VITE_OPENAI_MODEL=gpt-3.5-turbo

# 应用配置
VITE_APP_TITLE=AI 聊天应用
```

### 3. 验证配置

#### 方法一：使用测试页面
1. 启动应用：`pnpm dev`
2. 访问：http://localhost:5174/openai-test
3. 查看配置状态
4. 输入测试消息验证连接

#### 方法二：使用聊天界面
1. 访问：http://localhost:5174/chat
2. 点击"设置"按钮
3. 输入您的 API 密钥
4. 保存配置并测试

## 🔒 安全注意事项

### ⚠️ 重要提醒
- **不要**将真实的 API 密钥提交到 Git 仓库
- **不要**在公开的代码中硬编码 API 密钥
- **定期**轮换您的 API 密钥

### 🛡️ 推荐做法

#### 开发环境
```env
# .env (不要提交到 Git)
VITE_OPENAI_API_KEY=sk-your-development-key
```

#### 生产环境
使用代理服务器方案：
```env
# .env.production
VITE_OPENAI_USE_PROXY=true
VITE_OPENAI_PROXY_URL=https://your-api-server.com/api/openai
```

## 🚀 快速修复

### 临时解决方案
如果您想快速测试，可以直接在应用中配置：

1. 访问 http://localhost:5174/openai-test
2. 点击右上角的"设置"按钮
3. 输入您的 API 密钥
4. 选择模型（推荐 gpt-3.5-turbo）
5. 点击"保存配置"

### 验证步骤
1. 在测试页面输入简单问题："你好"
2. 点击"发送测试"
3. 如果看到 AI 回复，说明配置成功

## 🐛 常见问题

### Q: API 密钥格式不正确
**A:** 确保密钥以 `sk-` 开头，完整复制所有字符

### Q: 提示账户余额不足
**A:** 检查您的 OpenAI 账户余额：https://platform.openai.com/account/billing

### Q: 密钥被拒绝
**A:** 可能密钥已过期或被撤销，请生成新的密钥

### Q: 网络连接问题
**A:** 检查网络连接，某些地区可能需要代理

## 📞 获取帮助

如果仍有问题，请检查：
1. OpenAI 账户状态
2. API 密钥权限
3. 网络连接
4. 浏览器控制台错误信息

## 🎯 下一步

配置成功后，您可以：
- 在聊天界面与 AI 对话
- 测试不同的模型
- 探索高级功能
- 部署到生产环境

---

**记住**：保护好您的 API 密钥，它关系到您的账户安全和费用！




