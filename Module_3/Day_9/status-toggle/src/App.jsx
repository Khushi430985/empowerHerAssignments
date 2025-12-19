import React from "react";
import StatusToggle from "./statusToggle";
import ColorToggle from "./ColorToggle";

function App() {
  return (
    <div>
      <h2>Q1: Status Toggle</h2>
      <StatusToggle />

      <hr />

      <h2>Q2: Color Toggle</h2>
      <ColorToggle />
    </div>
  );
}

export default App;
