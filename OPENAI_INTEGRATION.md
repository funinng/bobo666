# OpenAI 集成使用说明

本项目已成功集成 OpenAI 模型服务，提供 AI 聊天功能。

## 功能特性

- 🤖 支持多种 OpenAI 模型（GPT-3.5-turbo、GPT-4、GPT-4-turbo）
- 💬 实时聊天对话界面
- ⚙️ 灵活的配置管理
- 🔄 流式响应支持
- 📱 响应式设计
- 🎨 美观的 UI 界面

## 快速开始

### 1. 配置 API 密钥

在项目根目录创建 `.env` 文件：

```env
# OpenAI 配置
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_OPENAI_BASE_URL=https://api.openai.com/v1
VITE_OPENAI_MODEL=gpt-3.5-turbo

# 应用配置
VITE_APP_TITLE=AI 聊天应用
```

### 2. 获取 OpenAI API 密钥

1. 访问 [OpenAI 官网](https://platform.openai.com/)
2. 注册或登录账户
3. 进入 API Keys 页面
4. 创建新的 API 密钥
5. 将密钥复制到 `.env` 文件中

### 3. 启动应用

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### 4. 使用聊天功能

1. 在侧边栏中点击 "AI 聊天"
2. 在输入框中输入您的问题
3. 按 Enter 键或点击发送按钮
4. 等待 AI 回复

## 项目结构

```
src/
├── components/
│   └── ChatInterface.vue      # 聊天界面组件
├── config/
│   └── openai.ts             # OpenAI 配置管理
├── services/
│   └── openai.ts             # OpenAI 服务封装
├── stores/
│   └── chat.ts               # 聊天状态管理
└── views/
    └── Chat.vue              # 聊天页面
```

## 核心组件说明

### OpenAIService

位于 `src/services/openai.ts`，提供以下功能：

- `chat(request)`: 发送聊天请求
- `chatStream(request)`: 流式聊天请求
- `updateConfig(config)`: 更新配置
- `getConfig()`: 获取当前配置

### ChatInterface

位于 `src/components/ChatInterface.vue`，主要特性：

- 消息显示和输入
- 实时打字效果
- 配置面板
- 错误处理
- 响应式设计

### Chat Store

位于 `src/stores/chat.ts`，状态管理：

- 消息历史管理
- 加载状态
- 错误处理
- 连接状态

## 配置选项

### 环境变量

| 变量名                 | 描述            | 默认值                      |
| ---------------------- | --------------- | --------------------------- |
| `VITE_OPENAI_API_KEY`  | OpenAI API 密钥 | 必填                        |
| `VITE_OPENAI_BASE_URL` | API 基础 URL    | `https://api.openai.com/v1` |
| `VITE_OPENAI_MODEL`    | 使用的模型      | `gpt-3.5-turbo`             |

### 支持的模型

- `gpt-3.5-turbo`: 快速且经济实惠
- `gpt-4`: 更强大的推理能力
- `gpt-4-turbo`: 最新版本，性能更佳

## 使用示例

### 基本聊天

```typescript
import { OpenAIService } from '@/services/openai';

const openai = new OpenAIService({
  apiKey: 'your-api-key',
  model: 'gpt-3.5-turbo',
});

const response = await openai.chat({
  messages: [{ role: 'user', content: '你好，请介绍一下自己' }],
});

console.log(response);
```

### 流式响应

```typescript
const stream = openai.chatStream({
  messages: [{ role: 'user', content: '请写一首诗' }],
});

for await (const chunk of stream) {
  console.log(chunk);
}
```

## 错误处理

应用包含完整的错误处理机制：

- API 密钥验证
- 网络连接错误
- 模型响应错误
- 用户输入验证

## 安全注意事项

1. **API 密钥安全**: 不要将 API 密钥提交到版本控制系统
2. **环境变量**: 使用 `.env` 文件管理敏感信息
3. **请求限制**: 注意 OpenAI API 的使用限制和费用
4. **内容过滤**: 考虑添加内容过滤机制

## 故障排除

### 常见问题

1. **API 密钥无效**
   - 检查密钥是否正确
   - 确认账户有足够的余额

2. **网络连接问题**
   - 检查网络连接
   - 确认防火墙设置

3. **模型不可用**
   - 检查模型名称是否正确
   - 确认账户有访问权限

### 调试模式

在浏览器控制台中查看详细错误信息：

```javascript
// 查看当前配置
console.log(openai.getConfig());

// 查看错误日志
console.error('OpenAI 错误:', error);
```

## 扩展功能

### 添加新模型

在 `ChatInterface.vue` 中的模型选择器中添加新选项：

```vue
<option value="gpt-4-vision">GPT-4 Vision</option>
```

### 自定义提示词

可以添加系统提示词来定制 AI 行为：

```typescript
const messages = [
  { role: 'system', content: '你是一个专业的编程助手' },
  { role: 'user', content: '如何学习 Vue.js？' },
];
```

### 消息持久化

可以集成数据库来保存聊天历史：

```typescript
// 保存消息到数据库
await saveMessage(message);

// 从数据库加载历史消息
const history = await loadMessageHistory();
```

## 许可证

本项目遵循 MIT 许可证。使用 OpenAI API 需要遵守 OpenAI 的使用条款。




