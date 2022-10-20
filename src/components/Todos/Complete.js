import React from "react";
import Modal from "../UI/Modal";

const Complete = () => {
  const title = "Completed!";
  const message = <img src="img/complete.gif" alt="Completed" />;
  return <Modal title={title} message={message} />;
};

export default Complete;
