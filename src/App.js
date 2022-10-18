import React, { useState } from "react";
import NewTodo from "./components/NewTodo/NewTodo";
import Todos from "./components/Todos/Todos";

const DUMMY_TODOS = [
  {
    id: "e1",
    title: "Learn React",
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Study for test", date: new Date(2021, 2, 12) },
];

function App() {
  const [todos, setTodo] = useState(DUMMY_TODOS);

  const addTodoHandler = (todo) => {
    setTodo((prevTodo) => {
      return [...prevTodo, todo];
    });
  };

  const deleteItemHandler = (todoId) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="flex flex-col items-center ">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteItem={deleteItemHandler} />
    </div>
  );
}

export default App;
