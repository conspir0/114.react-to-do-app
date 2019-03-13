import React from "react";

const Task = props => {
  const { id, text, date } = props.task;
  return (
    <div>
      <div>{text}</div>
      <div>{date}</div>
      <button onClick={() => props.status(id)}>DONE</button>
      <button onClick={() => props.delete(id)}>X</button>
    </div>
  );
};

export default Task;
