import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać w grę",
        date: "2019-05-01",
        important: true,
        status: true,
        finishDate: null,
        visible: true
      },
      {
        id: 1,
        text: "obrać ziemniaki",
        date: "2019-04-19",
        important: true,
        status: true,
        finishDate: null,
        visible: true
      },
      {
        id: 2,
        text: "wyjść z psem",
        date: "2019-03-19",
        important: false,
        status: true,
        finishDate: null,
        visible: true
      },
      {
        id: 3,
        text: "nauczyć się podstaw Reacta",
        date: "2019-05-12",
        important: true,
        status: true,
        finishDate: null,
        visible: true
      },
      {
        id: 4,
        text: "projekt w JS",
        date: "2019-06-07",
        important: true,
        status: true,
        finishDate: null,
        visible: true
      },
      {
        id: 5,
        text: "skończyć studia",
        date: "2019-08-10",
        important: false,
        status: true,
        finishDate: null,
        visible: true
      }
    ]
  };

  deleteTask = id => {
    console.log("delete " + id);
  };

  changeTaskStatus = id => {
    console.log("status " + id);
  };

  render() {
    return (
      <>
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          status={this.changeTaskStatus}
        />
      </>
    );
  }
}

export default App;
