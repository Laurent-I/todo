import React from "react";
import Card from "../UI/Card";

const Login = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className="flex items-center justify-center">
      <div className="h-[18rem] w-[40rem] bg-slate-800 rounded-lg shadow-xl mt-11">
        <form onSubmit={formSubmitHandler}>
          <div className="flex flex-col m-3">
            <label className="font-bold text-lg text-white font-mono">
              Enter Username:
            </label>
            <input
              // ref={}
              type="text"
              name="user"
              className={`w-1/2 mr-3 border-[3px] rounded-md focus:border-2 focus:outline-none  focus:border-blue-500 text-gray-500  border-slate-400 h-10 p-3 `}
            />
          </div>
          <div className="flex flex-col m-3">
            <label className="font-bold text-lg text-white font-mono">
              Enter Password:
            </label>
            <input
              // ref={dateInputRef}
              type="password"
              name="Password"
              className={`w-1/2 mr-3 border-[3px] rounded-md focus:border-2 focus:outline-none  focus:border-blue-500 text-gray-500  border-slate-400 h-10 p-3`}
            />
          </div>
          <div className="flex justify-end">
            <button
              className=" transition ease-in-out  mr-3 bg-blue-400 h-10 w-1/3 p-2 mt-2 text-white rounded-lg hover:bg-indigo-500 hover:scale-105 duration-200 font-semibold font-mono text-lg"
              type="submit"
              disabled
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default Login;
