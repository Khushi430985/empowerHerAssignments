import React from "react";
import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [results, setResults] = useState([]);

  const handleAction = () => {
    const a = Number(num1);
    const b = Number(num2);
    let result = 0;

    if (operation === "add") result = a + b;
    else if (operation === "subtract") result = a - b;
    else if (operation === "multiply") result = a * b;

    setResults([...results, result]);
  };

  return (
    <div>
      <h3>Calculator</h3>
      {/* rest JSX */}
    </div>
  );
}

export default Calculator;
