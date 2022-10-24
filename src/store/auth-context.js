import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
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
