import React from "react";

function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "8px 0" }}>
      <p><strong>User ID:</strong> {userId}</p>
      <p><strong>Title:</strong> {title}</p>
      <p>
        <strong>Status:</strong>{" "}
        {completed ? "Completed" : "Not Completed"}
      </p>
    </div>
  );
}

export default TodoCard;
