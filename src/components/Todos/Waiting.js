import React, { Fragment } from "react";
import Backdrop from "../UI/Backdrop";
import ReactDOM from "react-dom";
import Card from "../UI/Card";

const title = "Status!";
const message = "Pending";
const status = (
  <img src="img/warning.gif" alt="" className="w-32 h-full mb-2" />
);

const WaitingModal = (props) => {
  return (
    <div className="flex justify-center">
      <Card className=" flex flex-col h-[20rem] w-[36rem] bg-white z-[100] top-60 fixed  ">
        <header className="h-[6rem] w-full bg-slate-800 flex justify-center items-center">
          <h1 className="text-white font-mono font-bold text-2xl m-3 ">
            {props.title}
          </h1>
        </header>
        <div className="h-32 flex flex-col justify-center items-center mt-8">
          {props.status}
          <p className="font-mono text-2xl text-red-500">{props.message}</p>
        </div>
      </Card>
    </div>
  );
};

const Waiting = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <WaitingModal
          title={title}
          message={message}
          status={status}
          onClick={props.onConfirm}
        />,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default Waiting;
