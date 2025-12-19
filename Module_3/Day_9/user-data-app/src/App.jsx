import React from "react";
import UserData from "./UserData";
import Counter from "./Counter";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Q1: Fetch and Display User Data</h2>
      <UserData />

      <hr />

      <h2>Q2: Counter Application</h2>
      <Counter />
    </div>
  );
}

export default App;
