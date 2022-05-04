import React from "react";

const Note = ({ note }) => {
  const { message } = note;

  return (
    <div className="note">
      <p>{message}</p>
      <div className="edit-note">
        <input type="checkbox" name="" id="" />
        <button className="btn--edit">Edit</button>
        <button className="btn--delete">Delete</button>
      </div>
    </div>
  );
};

export default Note;
