import React, { Fragment } from "react";
import TodoForm from "./components/NewTodo/TodoForm";

function App() {
  return (
    <div className="flex flex-col items-center mt-11 ">
      <TodoForm />
    </div>
  );
}

export default App;
