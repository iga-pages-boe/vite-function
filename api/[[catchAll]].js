// Catch-all 路由 - 处理所有未匹配的 API 请求
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const method = request.method;
    const pathname = url.pathname;

    // 可以在这里处理所有未匹配的路由
    return Response.json({
      error: 'Not Found',
      message: `Route ${pathname} not found`,
      method: method,
      requestedUrl: pathname,
      availableRoutes: [
        '/api/hello',
        '/api/users',
        '/api/users/list',
        '/api/users/:id',
        '/api/posts/:pid/comments/:cid'
      ]
    }, { status: 404 });
  },
};
