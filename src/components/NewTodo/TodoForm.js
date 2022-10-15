import React from "react";
import { useState } from "react";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // console.log(title);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // console.log(date);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const todoData = {
      title,
      date: new Date(date),
    };
    // console.log(todoData);
    props.onSaveTodo(todoData);

    setTitle("");
    setDate("");
  };

  return (
    <div className="h-[16rem] w-[40rem] bg-slate-800 rounded-lg shadow-xl">
      <form onSubmit={formSubmitHandler}>
        <div className="flex flex-col m-3">
          <label className="font-bold text-lg text-white font-mono">
            Enter Todo:
          </label>
          <input
            type="text"
            name="act"
            value={title}
            onChange={titleChangeHandler}
            className="w-1/2 mr-3 border-[3px] rounded-md focus:border-2 focus:outline-none  focus:border-blue-500 text-gray-500  border-slate-400 h-10 p-3"
          />
        </div>
        <div className="flex flex-col m-3">
          <label className="font-bold text-lg text-white font-mono">
            Enter Due Date:
          </label>
          <input
            type="date"
            name="act"
            value={date}
            onChange={dateChangeHandler}
            className="w-1/2 mr-3 border-[3px] rounded-md focus:border focus:outline-none  focus:border-blue-500 text-gray-500  border-slate-400 h-10 p-3"
          />
        </div>
        <div className="flex justify-end">
          <button
            className=" transition ease-in-out  mr-3 bg-blue-400 h-10 w-1/3 p-2 mt-2 text-white rounded-lg hover:bg-indigo-500 hover:scale-105 duration-200 font-semibold font-mono text-lg"
            type="submit"
          >
            Add Activity
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
