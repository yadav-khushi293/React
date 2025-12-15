import React from "react";
import { TodoList } from "../Componets/Todo_list";

export const TodoInput = () => {
  const [todoText, setTodoText] = React.useState("");
  const [todoData, setTodoData] = React.useState([]);

  const handleTodos = () => {
    if (todoText.trim() === "") {
      return;
    }
    const todoInfo = {
      id: Date.now(),
      text: todoText,
      isEdits: false,
      isComplete: false,
    };
    setTodoData((prev) => [...prev, todoInfo]);
    setTodoText("");
  };
  
  return (
    <>+
      <h1>todosInput</h1>

   
      <input value={todoText}  type="text" placeholder="enter the task...." onChange={(e) => setTodoText(e.target.value)}/>
      <button onClick={handleTodos}>Add</button>
      <TodoList props={{ todoData, setTodoData }} />
    
    </>
  );
};
