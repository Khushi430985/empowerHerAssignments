import express from "express";
import {
  addTodo,
  getMyTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController.js";

import { validateAddTodo } from "../validations/todoValidation.js";

const router = express.Router();

router.post("/add-todo", validateAddTodo, addTodo);
router.get("/get-my-todo/:userId", getMyTodos);
router.put("/update-todo/:todoId", updateTodo);
router.delete("/delete-todo/:todoId", deleteTodo);

export default router;
