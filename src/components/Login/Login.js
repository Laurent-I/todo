import React, { useState, useContext, useRef } from "react";
import AuthContext from "../../store/auth-context";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const Login = () => {
  const ctx = useContext(AuthContext);
  const [isValid, setIsValid] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [error, setError] = useState();
  const formSubmitHandler = (event) => {
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    event.preventDefault();

    if (enteredEmail.includes("@") && enteredPassword.trim().length > 6) {
      setIsValid(true);
      setError(null);
    }

    if (isValid) {
      setIsLoggedIn(true);
      ctx.loginHandler(isLoggedIn);
    }

    if (!isValid) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid email or password",
      });
      return;
    }
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
      <Card className="flex items-center justify-center">
        <div className="h-[18rem] w-[40rem] bg-slate-800 rounded-lg shadow-xl mt-11">
          <form onSubmit={formSubmitHandler}>
            <div className="flex flex-col m-3">
              <label className="font-bold text-lg text-white font-mono">
                Enter Email:
              </label>
              <input
                type="email"
                name="user"
                className={`w-1/2 mr-3 border-[3px] rounded-md focus:border-2 focus:outline-none  focus:border-blue-500 text-gray-500  border-slate-400 h-10 p-3 `}
                ref={emailInputRef}
              />
            </div>
            <div className="flex flex-col m-3">
              <label className="font-bold text-lg text-white font-mono">
                Enter Password:
              </label>
              <input
                type="password"
                name="Password"
                className={`w-1/2 mr-3 border-[3px] rounded-md focus:border-2 focus:outline-none  focus:border-blue-500 text-gray-500  border-slate-400 h-10 p-3`}
                ref={passwordInputRef}
              />
            </div>
            <div className="flex justify-end">
              <button
                className=" transition ease-in-out  mr-3 bg-blue-400 h-10 w-1/3 p-2 mt-2 text-white rounded-lg hover:bg-indigo-500 hover:scale-105 duration-200 font-semibold font-mono text-lg"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </Card>
    </>
  );
};

export default Login;
