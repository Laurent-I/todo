import React from "react";

const Backdrop = (props) => {
  return (
    <div
      className="bg-slate-700 bg-opacity-50 w-full h-full z-[10] fixed"
      onClick={props.onConfirm}
    />
  );
};

export default Backdrop;
