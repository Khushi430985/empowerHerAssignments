export const validateSignup = (req, res, next) => {
  const { name, email, age, location, password } = req.body;

  if (!name || !email || !age || !location || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (age < 18) {
    return res.status(400).json({ error: "Age must be 18 or above" });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters" });
  }

  next();
};
