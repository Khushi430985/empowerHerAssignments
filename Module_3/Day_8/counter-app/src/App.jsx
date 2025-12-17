import React from "react";
import Counter from "./Counter";
import Calculator from "./Calculator";
import MessageCard from "./MessageCard";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <h2>My React Assignments</h2>

      <Counter />
      <Calculator />

      <MessageCard title="Welcome" message="This is the first card" />
      <MessageCard title="Props" message="Passing data using props" />

      <UserProfile />
    </div>
  );
}

export default App;
