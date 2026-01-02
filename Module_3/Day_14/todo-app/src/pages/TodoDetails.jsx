import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodoById } from "../api/todoService";

export default function TodoDetails() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    getTodoById(id).then((data) => {
      setTodo(data);
    });
  }, [id]);

  if (!todo) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>Todo Details</h2>
      <p><b>ID:</b> {todo.id}</p>
      <p><b>Title:</b> {todo.title}</p>
      <p><b>Status:</b> {todo.completed ? "Completed ✅" : "Pending ❌"}</p>
    </div>
  );
}
