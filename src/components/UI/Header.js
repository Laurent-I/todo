import React from "react";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Header = () => {
  const ctx = useContext(AuthContext);

  return (
    <div className="w-full bg-slate-800 h-20 mb-5 flex justify-evenly items-center pl-3">
      <p className="text-white font-mono text-2xl">
        Event<span className="text-blue-500">Planner</span>{" "}
      </p>
      <button
        className=" transition ease-in-out  mr-3 bg-red-500 h-10 w-1/12 p-2 mt-1 text-white rounded-lg hover:bg-red-600 hover:scale-105 duration-200 font-semibold font-mono text-md"
        type="submit"
        onClick={ctx.logoutHandler}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
