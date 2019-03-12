import React from "react";
import Task from "./Task";

const TaskList = props => {
  return (
    <div>
      Task List
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default TaskList;
