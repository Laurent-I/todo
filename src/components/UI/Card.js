import React from "react";

const Card = (props) => {
  return <div className="rounded-lg shadow-2xl">{props.children}</div>;
};

export default Card;
