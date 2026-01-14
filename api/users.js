// RESTful 风格 - GET 方法
export function GET(request) {
  return Response.json({
    users: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ],
  });
}

// RESTful 风格 - POST 方法
export function POST(request) {
  return Response.json(
    {
      message: "User created successfully",
      timestamp: Date.now(),
    },
    { status: 201 }
  );
}
