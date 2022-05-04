import React from "react";
import EditNote from "./EditNote";

const Note = ({ note, categoryId }) => {
  const { message, id } = note;

  return (
    <div className="note">
      <p>{message}</p>
      <EditNote noteId={id} categoryId={categoryId} />
    </div>
  );
};

export default Note;
