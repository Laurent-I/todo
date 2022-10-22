import React, { useContext, useRef, useState } from "react";
import DeleteContext from "../../store/del-context";
import Modal from "../UI/Modal";

const TodoForm = (props) => {
  const eventInputRef = useRef();
  const dateInputRef = useRef();

  const ctx = useContext(DeleteContext);

  const [error, setError] = useState();

  const dueDate = Date.parse(props.date);
  const now = Date.parse(new Date());

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredEvent = eventInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    if (enteredEvent.trim().length === 0 || enteredDate.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid event and date (non-empty values)",
      });
      return;
    }

    if (dueDate < now) {
      setError({
        title: "Invalid Input",
        message: "A date must be set in the future",
      });
      return;
    }

    const todoData = {
      title: enteredEvent,
      date: new Date(enteredDate),
    };
    ctx.addHandler(todoData);
    eventInputRef.current.value = "";
    dateInputRef.current.value = "";
  };
  const confirmHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={confirmHandler}
        />
      )}
      <div className="h-[18rem] w-[40rem] bg-slate-800 rounded-lg shadow-xl mt-11">
        <form onSubmit={formSubmitHandler}>
          <div className="flex flex-col m-3">
            <label className="font-bold text-lg text-white font-mono">
              Enter Todo:
            </label>
            <input
              ref={eventInputRef}
              type="text"
              name="act"
              className={`w-1/2 mr-3 border-[3px] rounded-md focus:border-2 focus:outline-none  focus:border-blue-500 text-gray-500  border-slate-400 h-10 p-3 `}
            />
          </div>
          <div className="flex flex-col m-3">
            <label className="font-bold text-lg text-white font-mono">
              Enter Date:
            </label>
            <input
              ref={dateInputRef}
              type="date"
              name="act"
              className={`w-1/2 mr-3 border-[3px] rounded-md focus:border-2 focus:outline-none  focus:border-blue-500 text-gray-500  border-slate-400 h-10 p-3`}
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
    </>
  );
};

export default TodoForm;
