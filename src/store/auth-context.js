import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (state) => {
    setIsLoggedIn(state);
  };

  const logoutHandler = (state) => {
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
