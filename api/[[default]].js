// 第三方框架集成示例 - Express 风格
// 所有路由服务都收拢在一个函数文件内
// 文件名必须是 [[]] 的格式，如 [[default]].js
// 无需额外启动 HTTP Server 与设置端口监听
// 必须导出框架实例否则构建器不会将其识别为函数

// 注意：这是一个示例，实际使用时需要安装 express
// npm install express

// import express from 'express';
// const app = express();

// app.use(express.json());

// app.get('/api/status', (req, res) => {
//   res.json({ status: 'ok', timestamp: Date.now() });
// });

// app.get('/api/info', (req, res) => {
//   res.json({ 
//     name: 'My API', 
//     version: '1.0.0',
//     description: 'Express framework integration example'
//   });
// });

// app.post('/api/data', (req, res) => {
//   const data = req.body;
//   res.json({ 
//     message: 'Data received', 
//     data: data,
//     timestamp: Date.now()
//   });
// });

// // 必须导出框架实例
// export default app;

// 不使用 Express 时的备用实现
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const method = request.method;
    
    if (method === 'GET' && url.pathname === '/api/status') {
      return Response.json({ status: 'ok', timestamp: Date.now() });
    }
    
    if (method === 'GET' && url.pathname === '/api/info') {
      return Response.json({ 
        name: 'My API', 
        version: '1.0.0',
        description: 'Default handler example'
      });
    }
    
    return new Response('Not Found', { status: 404 });
  },
};
