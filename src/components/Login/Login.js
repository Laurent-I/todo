import React, { useReducer, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const emailReducer = (action, state) => {
  if (action.type === "EMAIL_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};
const passwordReducer = (action, state) => {
  if (action.type === "EMAIL_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const Login = () => {
  const ctx = useContext(AuthContext);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  // const [formIsValid, setIsFormValid] = useState(false);
  const [error, setError] = useState();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (emailState.isValid && passwordState.isValid) {
      ctx.isLoggedIn = true;
    }

    if (!emailState.isValid || !passwordState.isValid) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid email or password",
      });
      return;
    }

    if (emailState.isValid && passwordState.isValid) {
      ctx.loginHandler();
    }
  };

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "EMAIL_INPUT", val: event.target.value });
    // setIsFormValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value });
    // setIsFormValid(emailState.isValid && passwordState.isValid);
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
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
                // ref={}
                type="email"
                name="user"
                className={`w-1/2 mr-3 border-[3px] rounded-md focus:border-2 focus:outline-none  focus:border-blue-500 text-gray-500  border-slate-400 h-10 p-3 `}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
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
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
              />
            </div>
            <div className="flex justify-end">
              <button
                className=" transition ease-in-out  mr-3 bg-blue-400 h-10 w-1/3 p-2 mt-2 text-white rounded-lg hover:bg-indigo-500 hover:scale-105 duration-200 font-semibold font-mono text-lg"
                type="submit"
                // disabled={!formIsValid}
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
