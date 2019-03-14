import React from "react";

const Task = props => {
  const style = {
    color: "red"
  };
  const { id, text, date, status, important, finishDate } = props.task;

  if (status) {
    return (
      <div>
        <div style={important ? style : null}>{text}</div>
        <div>zrobić do: {date}</div>
        <button onClick={() => props.status(id)}>DONE</button>
        <button onClick={() => props.delete(id)}>X</button>
      </div>
    );
  } else {
    const finishTime = new Date(finishDate).toLocaleString();

    return (
      <div>
        <div>{text}</div>
        <div>zrobić do: {date}</div>
        <div>wykonano: {finishTime}</div>
        <button onClick={() => props.delete(id)}>X</button>
      </div>
    );
  }
};
export default Task;
