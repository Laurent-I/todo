import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedInfo = localStorage.getItem("isLoggedIn");

    if (storedInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (state) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(state);
  };

  const logoutHandler = (state) => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(state);
  };

  const contextValue = {
    isLoggedIn,
    loginHandler,
    logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
