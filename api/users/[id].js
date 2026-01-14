// RESTful 风格 - 动态路由参数
export function GET(request) {
  const { id } = request.params;
  
  return Response.json({
    user: {
      id: id,
      name: `User ${id}`,
      email: `user${id}@example.com`
    }
  });
}

export function PUT(request) {
  const { id } = request.params;
  
  return Response.json({
    message: `User ${id} updated successfully`,
    timestamp: Date.now()
  });
}

export function DELETE(request) {
  const { id } = request.params;
  
  return Response.json({
    message: `User ${id} deleted successfully`,
    timestamp: Date.now()
  });
}
