import React from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(task => task.status);
  const done = props.tasks.filter(task => !task.status);
  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      status={props.status}
    />
  ));
  const doneTasks = done.map(task => (
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
      {activeTasks.length > 0 ? activeTasks : <p>NO TASKS</p>}
      <h2>DONE {doneTasks.length}</h2>
      {done.length > 5 && <span>Wyświetlono tylko 5 zadań</span>}
      {doneTasks.slice(0, 5)}
    </>
  );
};

export default TaskList;
