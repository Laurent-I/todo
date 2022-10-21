import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import Complete from "./Complete";
import TodoDate from "./TodoDate";
import Waiting from "./Waiting";

const TodoItem = (props) => {
  const [show, setShow] = useState(false);
  const [isPending, setIsPending] = useState();
  const dueDate = Date.parse(props.date);
  console.log(props.date);
  const now = Date.parse(new Date());
  // console.log("now " + now);
  // console.log("duedate " + dueDate);
  console.log(props.title);

  useEffect(() => {
    if (dueDate > now) {
      setIsPending(true);
    } else {
      setIsPending(false);
    }
  }, []);

  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  const showHandler = () => {
    setShow(true);
  };
  const hideHandler = () => {
    setShow(false);
  };
  const finishHandler = () => {
    setIsPending(false);
  };

  return (
    <>
      {show && <Complete onConfirm={hideHandler} />}

      {show && isPending && (
        <Waiting onConfirm={hideHandler} now={now} due={dueDate} />
      )}
      <Card
        className="bg-gray-700 p-3 flex flex-row justify-around m-5 h-[11rem] w-[40rem] transition ease-in-out hover:scale-105 duration-100"
        onDelete={props.onDelete}
        id={props.id}
        onClick={showHandler}
      >
        <div className="flex text-center justify-around w-full">
          <div className="flex flex-row w-10/12">
            <TodoDate date={props.date} />
            <div className="w-7/12 flex items-center">
              <p className="text-white text-xl text-center font-mono">
                {props.title}
              </p>
            </div>
          </div>
          {!isPending && (
            <div className="flex  rounded-full h-10 w-10  items-center my-16  justify-center ">
              <input
                type="checkbox"
                value=""
                id="inputCustom"
                className="w-4 h-4 accent-green-500 rounded-full"
                checked
                readOnly
              />
            </div>
          )}
          {isPending && (
            <div className="flex flex-col my-16 items-center text-center justify-center w-2/4">
              <p className="text-red-500 animate-pulse mb-1">Upcoming...</p>
              <div className="flex justify-between">
                <button
                  className=" transition ease-in-out  mr-3 bg-red-500 h-10 w-full p-2 mt-2 text-white rounded-lg hover:bg-red-600 hover:scale-105 duration-200 font-semibold font-mono text-md"
                  type="submit"
                  onClick={deleteHandler}
                >
                  Cancel
                </button>
                <button
                  className=" transition ease-in-out  mr-3 bg-green-500 h-10 w-full p-2 mt-2 text-white rounded-lg hover:bg-green-600 hover:scale-105 duration-200 font-semibold font-mono text-md"
                  type="submit"
                  onClick={finishHandler}
                >
                  Finished
                </button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </>
  );
};

export default TodoItem;
