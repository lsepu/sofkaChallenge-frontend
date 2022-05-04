import React from "react";

const Note = ({ note }) => {
  const { title, message } = note;

  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

export default Note;
