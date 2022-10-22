import React from "react";

const DeleteContext = React.createContext({
  deleteHandler: () => {},
  addHandler: () => {},
});

export default DeleteContext;
