import React from "react";
import Task from "./Task";

const TaskList = props => {
  const tasks = props.tasks.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      status={props.status}
    />
  ));
  return (
    <>
      <h2>TO DO</h2>
      {tasks}
      <h2>DONE (0)</h2>
    </>
  );
};

export default TaskList;
