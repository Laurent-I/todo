import React, { useState, useContext } from "react";
import Login from "./components/Login/Login";
import NewTodo from "./components/NewTodo/NewTodo";
import Todos from "./components/Todos/Todos";
import Header from "./components/UI/Header";
import AuthContext from "./store/auth-context";
import DeleteContext from "./store/del-context";

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
  const ctx = useContext(AuthContext);

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

  const contextValue = {
    deleteHandler: deleteItemHandler,
    addHandler: addTodoHandler,
  };

  return (
    <DeleteContext.Provider value={contextValue}>
      <Header />
      <Login />
      {ctx.isLoggedIn && (
        <div className="flex flex-col items-center ">
          <NewTodo />
          <Todos items={todos} />
        </div>
      )}
    </DeleteContext.Provider>
  );
}

export default App;
