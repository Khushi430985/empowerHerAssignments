import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "../db.json");


function readDB() {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
}

function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}


router.post("/add", (req, res) => {
  const db = readDB();
  const newTodo = req.body;

  if (!newTodo.id || !newTodo.title) {
    return res.status(400).json({ message: "Todo must have id and title" });
  }

  db.todos.push(newTodo);
  writeDB(db);

  res.status(201).json({ message: "Todo added", todo: newTodo });
});


router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.todos);
});


router.get("/:todoId", (req, res) => {
  const { todoId } = req.params;
  const db = readDB();

  const todo = db.todos.find(t => t.id == todoId);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
});


router.put("/update/:todoId", (req, res) => {
  const { todoId } = req.params;
  const db = readDB();

  const index = db.todos.findIndex(t => t.id == todoId);
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  db.todos[index] = { ...db.todos[index], ...req.body };
  writeDB(db);

  res.json({ message: "Todo updated", todo: db.todos[index] });
});

// ✅ DELETE /todos/delete/:todoId - Delete Todo
router.delete("/delete/:todoId", (req, res) => {
  const { todoId } = req.params;
  const db = readDB();

  const index = db.todos.findIndex(t => t.id == todoId);
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const deletedTodo = db.todos.splice(index, 1);
  writeDB(db);

  res.json({ message: "Todo deleted", todo: deletedTodo[0] });
});

export default router;
