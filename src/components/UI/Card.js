import React from "react";

const Card = (props) => {
  const classes = "rounded-lg shadow-2xl " + props.className;
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };
  console.log(props.id);

  return (
    <div className={classes} onClick={deleteHandler}>
      {props.children}
    </div>
  );
};

export default Card;
