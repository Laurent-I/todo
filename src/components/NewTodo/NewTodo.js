import React from "react";
import TodoForm from "./TodoForm";

const NewTodo = (props) => {
  const saveDataHandler = (enteredTodoData) => {
    const todoData = {
      ...enteredTodoData,
      id: Math.random().toString(),
    };

    props.onAddTodo(todoData);
  };
  return (
    <>
      <TodoForm onSaveTodo={saveDataHandler} />
    </>
  );
};

export default NewTodo;
