export default function validateTodo(req, res, next) {
  const body = req.body;
  const keys = Object.keys(body);

  if (!body.title || keys.length !== 1) {
    return res.status(400).json({
      error: "Invalid request body. Only 'title' is allowed"
    });
  }

  next();
}
