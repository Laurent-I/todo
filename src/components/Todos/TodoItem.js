import React, { useState } from "react";
import Card from "../UI/Card";
import TodoDate from "./TodoDate";

const TodoItem = (props) => {
  let content = (
    <div className="flex rounded-full h-10 w-10  items-center my-16 border-2 border-green-400 justify-center ">
      <img src="img/tick.svg" alt="tick" className="w-7 h-7" />
    </div>
  );

  content = (
    <div className="flex rounded-full h-10 w-10  items-center my-16 justify-center ">
      <p className="text-red-500 font-mono font-semibold text-lg">Pending...</p>
    </div>
  );

  return (
    <Card className="bg-gray-700 p-3 flex flex-col justify-evenly m-5 h-[14rem] w-[40rem] transition ease-in-out hover:scale-105 duration-100">
      <div className="flex flex-row text-center gap-[25rem]">
        <TodoDate date={props.date} />
        <div className="flex rounded-full h-10 w-10  items-center my-16 border-2 border-green-400 justify-center ">
          <input
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-400 rounded-full border-gray-300"
          />
        </div>
      </div>
      <div className=" p-3 ">
        <p className="text-white text-xl font-mono">{props.title}</p>
      </div>
    </Card>
  );
};

export default TodoItem;
