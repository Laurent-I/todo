import React, { Fragment, useEffect, useState } from "react";
import Backdrop from "../UI/Backdrop";
import ReactDOM from "react-dom";
import Card from "../UI/Card";

const title = "Status!";
const message = "Due in: ";
const status = (
  <img src="img/warning.gif" alt="" className="w-32 h-full mb-2" />
);

const WaitingModal = (props) => {
  const dueDate = new Date(props.dueDate);
  // const now = new Date(props.now);
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const difference = (date1, date2) => {
    // calculate the time difference of two dates JavaScript
    console.log("Now:", date1);
    var diffTime = date2.getTime() - date1.getTime();
    var days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    let newTime = { ...remainingTime };
    newTime.days = days;
    newTime.hours = hours;
    newTime.minutes = minutes;
    newTime.seconds = seconds;
    setRemainingTime(newTime);
  };

  useEffect(() => {
    setInterval(() => {
      difference(new Date(), dueDate);
    }, 100);
  }, []);
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
          <p className="font-mono text-2xl text-red-500">
            {props.message}
            {`${remainingTime.days > 1 ? remainingTime.days : "0"}days ${
              remainingTime.hours
            }hrs ${remainingTime.minutes}min ${remainingTime.seconds}s`}
          </p>
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
          now={props.now}
          dueDate={props.due}
        />,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default Waiting;
