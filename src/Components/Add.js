import React from "react";
import { connect } from "react-redux";
import { addTask, EditTask } from "./Action/Actions";

const AddTask = ({ dispatch }) => {
  let input;
  const addTaskk = (e) => {
    e.preventDefault();
    if (!input.value) return;
    dispatch(addTask(input.value));
    input.value = "";
  };

  return (
    <div>
      <div>
        <form onSubmit={addTaskk}>
          <input
            ref={(node) => (input = node)}
            placeholder="What to ignore here..."
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default connect()(AddTask);