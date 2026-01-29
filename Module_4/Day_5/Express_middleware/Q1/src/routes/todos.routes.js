import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import rateLimiter from "../middleware/rateLimiter.middleware.js";
import validateTodo from "../middleware/validateTodo.middleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "../db.json");

const router = express.Router();

function readDB() {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
}

function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

router.post("/add", validateTodo, (req, res) => {
  const todos = readDB();

  const newTodo = {
    id: Date.now().toString(),
    title: req.body.title
  };

  todos.push(newTodo);
  writeDB(todos);

  res.status(201).json(newTodo);
});

router.get("/", rateLimiter, (req, res) => {
  const todos = readDB();
  res.json(todos);
});

router.get("/:todoId", (req, res) => {
  const todos = readDB();
  const todo = todos.find(t => t.id === req.params.todoId);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json(todo);
});

router.put("/update/:todoId", (req, res) => {
  const todos = readDB();
  const index = todos.findIndex(t => t.id === req.params.todoId);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos[index] = { ...todos[index], ...req.body };
  writeDB(todos);

  res.json(todos[index]);
});

router.delete("/delete/:todoId", (req, res) => {
  const todos = readDB();
  const newTodos = todos.filter(t => t.id !== req.params.todoId);

  if (todos.length === newTodos.length) {
    return res.status(404).json({ error: "Todo not found" });
  }

  writeDB(newTodos);
  res.json({ message: "Todo deleted successfully" });
});

export default router;
