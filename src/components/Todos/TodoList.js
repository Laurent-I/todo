import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  let content = (
    <h1 className="text-red-500 text-2xl mt-11">
      No task found. Try adding one!
    </h1>
  );

  if (props.items.length === 0) {
    return content;
  }

  return (
    <ul>
      {props.items.map((todos) => (
        <TodoItem
          id={todos.id}
          key={todos.id}
          title={todos.title}
          date={todos.date}
        />
      ))}
    </ul>
  );
};

export default TodoList;
