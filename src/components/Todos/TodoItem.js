import React from "react";
import Card from "../UI/Card";
import TodoDate from "./TodoDate";

const TodoItem = (props) => {
  const dueDate = Date.parse(props.date);
  // console.log(props.date);
  const now = Date.parse(new Date());
  // console.log("now " + now);
  // console.log("duedate " + dueDate);
  console.log(props.title);
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
    <Card className="bg-gray-700 p-3 flex flex-row justify-around m-5 h-[11rem] w-[40rem] transition ease-in-out hover:scale-105 duration-100">
      <div className="flex text-center justify-around w-full">
        <div className="flex flex-row w-10/12">
          <TodoDate date={props.date} />
          <div className="w-7/12 flex items-center">
            <p className="text-white text-xl text-center font-mono">
              {props.title}
            </p>
          </div>
        </div>
        <div className="flex  rounded-full h-10 w-10  items-center my-16 border-2 border-green-400 justify-center ">
          <input
            type="checkbox"
            value=""
            id="inputCustom"
            className="w-4 h-4 accent-green-500 rounded-full"
          />
        </div>
      </div>
    </Card>
  );
};

export default TodoItem;
