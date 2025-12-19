import React, { useState } from "react";
import StatusToggle from "./statusToggle";
import ColorToggle from "./ColorToggle";
import TodosList from "./TodosList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      
      <h2>Q1: Status Toggle</h2>
      <StatusToggle />

      <hr />

      <h2>Q2: Color Toggle</h2>
      <ColorToggle />

      <hr />

      <h2>Q3: Todo List with Cleanup</h2>
      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>

      {showTodos && <TodosList />}

    </div>
  );
}

export default App;
