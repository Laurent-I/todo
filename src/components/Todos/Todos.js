import React from "react";
import TodoList from "./TodoList";

const Todos = (props) => {
  return (
    <>
      <TodoList items={props.items} />
    </>
  );
};

export default Todos;
