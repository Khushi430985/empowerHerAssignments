import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todos</h2>
      <button onClick={logout}>Logout</button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ cursor: "pointer", margin: "10px 0" }}
            onClick={() => navigate(`/todos/${todo.id}`)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
