// Commonjs 写法 - Express 风格
export default async function handler(req, res) {
  const { page = 1, limit = 10 } = req.query;

  res.status(200).json({
    message: "User list",
    page: parseInt(page),
    limit: parseInt(limit),
    data: [
      { id: 1, name: "Alice", email: "alice@example.com" },
      { id: 2, name: "Bob", email: "bob@example.com" },
    ],
    timestamp: Date.now(),
  });
}
