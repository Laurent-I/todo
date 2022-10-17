import React from "react";
import Card from "../UI/Card";
import TodoDate from "./TodoDate";

const TodoItem = (props) => {
  const dueDate = props.date.getSeconds();
  const now = new Date(props.date).getSeconds();
  console.log("now " + now);
  console.log("duedate " + dueDate);
  // let content = (
  //   <div className="flex rounded-full h-10 w-10  items-center my-16 border-2 border-green-400 justify-center ">
  //     <img src="img/tick.svg" alt="tick" className="w-7 h-7" />
  //   </div>
  // );

  // content = (
  //   <div className="flex rounded-full h-10 w-10  items-center my-16 justify-center ">
  //     <p className="text-red-500 font-mono font-semibold text-lg">Pending...</p>
  //   </div>
  // );

  return (
    <Card className="bg-gray-700 p-3 flex flex-row justify-evenly m-5 h-[11rem] w-[40rem] transition ease-in-out hover:scale-105 duration-100">
      <div className="flex flex-row text-center justify-between gap-[18rem]">
        <div className="flex flex-row ">
          <TodoDate date={props.date} />
          <div className=" p-3 flex items-center">
            <p className="text-white text-xl font-mono">{props.title}</p>
          </div>
        </div>
        <div className="flex rounded-full h-10 w-10  items-center my-16 border-2 border-green-400 justify-center ">
          <input
            type="checkbox"
            value=""
            className="w-4 h-4 accent-emerald-500/25 text-green-600 "
          />
        </div>
      </div>
    </Card>
  );
};

export default TodoItem;
