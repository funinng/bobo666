// OpenAI 代理服务器示例
// 这个文件展示了如何创建一个简单的代理服务器来安全地调用 OpenAI API

const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');

const app = express();
const port = 3001;

// 中间件
app.use(cors());
app.use(express.json());

// 创建 OpenAI 客户端（在服务器端，不需要 dangerouslyAllowBrowser）
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // 从环境变量获取 API 密钥
});

// 代理 OpenAI 聊天完成接口
app.post('/api/openai/chat/completions', async (req, res) => {
  try {
    const { model, messages, temperature, max_tokens, stream } = req.body;

    // 验证请求参数
    if (!model || !messages) {
      return res.status(400).json({ error: '缺少必要参数' });
    }

    // 调用 OpenAI API
    const response = await openai.chat.completions.create({
      model,
      messages,
      temperature: temperature || 0.7,
      max_tokens: max_tokens || 1000,
      stream: stream || false,
    });

    // 返回响应
    res.json(response);
  } catch (error) {
    console.error('OpenAI API 错误:', error);
    res.status(500).json({
      error: 'OpenAI API 调用失败',
      message: error.message,
    });
  }
});

// 代理 OpenAI 流式聊天完成接口
app.post('/api/openai/chat/completions/stream', async (req, res) => {
  try {
    const { model, messages, temperature, max_tokens } = req.body;

    // 验证请求参数
    if (!model || !messages) {
      return res.status(400).json({ error: '缺少必要参数' });
    }

    // 设置流式响应头
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // 调用 OpenAI API（流式）
    const stream = await openai.chat.completions.create({
      model,
      messages,
      temperature: temperature || 0.7,
      max_tokens: max_tokens || 1000,
      stream: true,
    });

    // 转发流式响应
    for await (const chunk of stream) {
      const data = `data: ${JSON.stringify(chunk)}\n\n`;
      res.write(data);
    }

    // 结束流
    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error) {
    console.error('OpenAI 流式 API 错误:', error);
    res.status(500).json({
      error: 'OpenAI 流式 API 调用失败',
      message: error.message,
    });
  }
});

// 健康检查接口
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'OpenAI 代理服务器运行正常' });
});

// 启动服务器
app.listen(port, () => {
  console.log(`OpenAI 代理服务器运行在 http://localhost:${port}`);
  console.log('请确保设置了 OPENAI_API_KEY 环境变量');
});

// 错误处理
process.on('unhandledRejection', (err) => {
  console.error('未处理的 Promise 拒绝:', err);
});

process.on('uncaughtException', (err) => {
  console.error('未捕获的异常:', err);
  process.exit(1);
});




