import React from "react";

const TodoDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="border-2 border-blue-500 flex flex-col m-2 w-[7rem] h-[8rem] rounded-xl justify-center font-mono">
      <div className="text-white justify-center items-center m-2 font-bold">
        {month}
      </div>
      <div className="text-white justify-center items-center m-2 font-bold">
        {year}
      </div>
      <div className="text-white justify-center items-center m-2 font-bold">
        {day}
      </div>
    </div>
  );
};

export default TodoDate;
