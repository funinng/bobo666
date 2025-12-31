# 🚀 OpenAI 集成快速设置

## 遇到 API 密钥错误？

如果您看到 "Incorrect API key provided" 错误，请按照以下步骤快速解决：

### 📋 方法一：在应用中直接配置（推荐）

1. **启动应用**
   ```bash
   pnpm dev
   ```

2. **打开测试页面**
   - 访问：http://localhost:5174/openai-test
   - 或访问：http://localhost:5174/chat

3. **配置 API 密钥**
   - 点击右上角的"设置"按钮
   - 按照界面提示获取 OpenAI API 密钥
   - 输入密钥并保存

4. **测试连接**
   - 在测试页面输入简单问题
   - 点击"发送测试"验证配置

### 📁 方法二：使用环境变量文件

1. **创建 .env 文件**
   在项目根目录创建 `.env` 文件：
   ```env
   VITE_OPENAI_API_KEY=your-actual-api-key-here
   VITE_OPENAI_BASE_URL=https://api.openai.com/v1
   VITE_OPENAI_MODEL=gpt-3.5-turbo
   ```

2. **重启应用**
   ```bash
   # 停止当前应用 (Ctrl+C)
   # 重新启动
   pnpm dev
   ```

### 🔑 获取 OpenAI API 密钥

1. 访问：https://platform.openai.com/account/api-keys
2. 登录您的 OpenAI 账户
3. 点击 "Create new secret key"
4. 复制生成的密钥（格式：`sk-proj-...` 或 `sk-...`）

### ✅ 验证配置成功

配置成功后，您应该能够：
- ✅ 在测试页面看到"已配置"状态
- ✅ 发送测试消息并收到 AI 回复
- ✅ 在聊天界面正常对话

### 🆘 仍有问题？

#### 常见错误及解决方案：

**❌ "insufficient_quota"**
- 问题：账户余额不足
- 解决：访问 https://platform.openai.com/account/billing 充值

**❌ "rate_limit_exceeded"**
- 问题：请求过于频繁
- 解决：等待几分钟后重试

**❌ "model_not_found"**
- 问题：模型不可用
- 解决：切换到 gpt-3.5-turbo 模型

**❌ 网络连接问题**
- 问题：无法连接到 OpenAI API
- 解决：检查网络连接，可能需要代理

### 🛡️ 安全提醒

- ⚠️ 不要将 API 密钥分享给他人
- ⚠️ 不要将 `.env` 文件提交到 Git
- ⚠️ 定期检查 API 使用情况和费用

### 🎯 下一步

配置成功后，您可以：
- 💬 开始与 AI 聊天
- 🧪 测试不同的模型
- ⚙️ 探索高级配置选项
- 🚀 部署到生产环境

---

**需要帮助？** 查看详细文档：
- [完整集成指南](./OPENAI_INTEGRATION.md)
- [安全配置指南](./BROWSER_SECURITY_GUIDE.md)
- [API 密钥设置指南](./API_KEY_SETUP_GUIDE.md)




