// Cloudflare Workers 风格 - 嵌套动态路由
export default {
  async fetch(request) {
    const { pid, cid } = request.params;
    const method = request.method;

    if (method === 'GET') {
      return Response.json({
        comment: {
          id: cid,
          postId: pid,
          content: `This is comment ${cid} on post ${pid}`,
          author: 'John Doe',
          createdAt: new Date().toISOString()
        }
      });
    }

    if (method === 'DELETE') {
      return Response.json({
        message: `Comment ${cid} on post ${pid} deleted successfully`
      });
    }

    return new Response('Method not allowed', { status: 405 });
  },
};
