import React, { useContext } from "react";
import ToDoContext from "../context/ToDo/ToDoContext";

const EditNote = ({ noteId, categoryId }) => {
  const todoContext = useContext(ToDoContext);
  const { deleteNote } = todoContext;

  const onDelete = (e) => {
    e.preventDefault();
    deleteNote(noteId, categoryId);
  };

  return (
    <div className="edit-note">
      <input type="checkbox" name="" id="" />
      <button className="btn--edit">Edit</button>
      <button onClick={onDelete} className="btn--delete">
        Delete
      </button>
    </div>
  );
};

export default EditNote;
