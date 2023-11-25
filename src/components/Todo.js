import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
/* The line `const Todo = (props) => {` is defining a functional component named `Todo`. This component
takes in a single parameter `props`, which is an object containing any properties passed to the
component. */
const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleDelete = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="card">
      <h2>{props?.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={handleCloseModal} onConfirm={handleCloseModal} />
      )}
      {modalIsOpen && <Backdrop onCancel={handleCloseModal} />}
    </div>
  );
};

export default Todo;
