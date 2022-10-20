import React from "react";
import Card from "./Card";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";

const ModalOverlay = (props) => {
  return (
    <div className="flex justify-center">
      <Card className=" flex flex-col h-[14rem] w-[36rem] bg-white z-[100] top-60 fixed  ">
        <header className="h-[4rem] w-full bg-slate-800 flex justify-center items-center">
          <h1 className="text-white font-mono font-bold text-2xl m-3 ">
            {props.title}
          </h1>
        </header>
        <div className="flex flex-col justify-between items-center ">
          {props.status}
          <p className="text-md font-mono text-lg m-auto mt-5">
            {props.message}
          </p>
        </div>
        <footer className="flex justify-end mt-10">
          <button
            className=" transition ease-in-out  mr-3 bg-slate-600 h-10 w-1/4 p-2 mt-2 text-white rounded-lg hover:bg-slate-800 hover:scale-105 duration-200 font-semibold font-mono text-lg"
            type="submit"
            onClick={props.onConfirm}
          >
            Close
          </button>
        </footer>
      </Card>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          status={props.status}
          message={props.message}
          onConfirm={props.onConfirm}
          className={props.className}
        />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Modal;
