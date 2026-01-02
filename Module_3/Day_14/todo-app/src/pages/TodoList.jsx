import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((data) => {
      setTodos(data.slice(0, 10));
    });
  }, []);

  return (
    <div>
      <h2>Todo List</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>
              {todo.title}
            </Link>
            {" - "}
            {todo.completed ? "Completed" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}
