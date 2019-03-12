import React from "react";

const Task = props => {
  const { id, text, date } = props.task;
  return (
    <div>
      <div>{text}</div>
      <div>{date}</div>
      <button onClick={() => props.delete(id)}>DONE</button>
      <button onClick={() => props.status(id)}>X</button>
    </div>
  );
};

export default Task;
