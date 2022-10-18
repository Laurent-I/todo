import React from "react";
import TodoList from "./TodoList";

const Todos = (props) => {
  return (
    <>
      <TodoList items={props.items} onDelete={props.onDeleteItem} />
    </>
  );
};

export default Todos;
