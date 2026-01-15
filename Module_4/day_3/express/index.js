const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.json({ message: "This is home page" });
});

app.get("/contactus", (req, res) => {
  res.json({ message: "Contact us at contact@contact.com" });
});

app.get("/about", (req, res) => {
  res.json({ message: "Welcome to the About page!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
