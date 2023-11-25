import React from "react";

/* The line `const Todo = (props) => {` is defining a functional component named `Todo`. This component
takes in a single parameter `props`, which is an object containing any properties passed to the
component. */
const Todo = (props) => {
  /**
   * The handleDelete function logs a message to the console when a button is clicked and also logs the
   * value of the props.text variable.
   */
  const handleDelete = () => {
    // console.log("button clicked");
    // console.log(props.text);
  };
  return (
    <div className="card">
      <h2>{props?.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
