import React, { Component } from "react";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate
  };

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleCheckBox = e => {
    this.setState({
      checked: !this.state.checked
    });
  };

  handleDate = e => {
    this.setState({
      date: e.target.value
    });
  };

  handleClick = () => {};

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <>
        <h1>TASK LIST</h1>
        <input
          type="text"
          placeholder="Add task"
          value={this.state.text}
          onChange={this.handleText}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          id="important"
          onChange={this.handleCheckBox}
        />
        <label htmlFor="important">priorytet</label>
        <label htmlFor="date">Time to do</label>
        <input
          type="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <button onClick={this.handleClick}>Add</button>
      </>
    );
  }
}

export default AddTask;
