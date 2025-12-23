import { useContext, useRef } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const inputRef = useRef();

  const handleAdd = () => {
    const value = inputRef.current.value;
    if (value.trim() !== "") {
      addTodo(value);
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter todo" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
