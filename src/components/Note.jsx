import React, { useContext, useState } from "react";
import ToDoContext from "../context/ToDo/ToDoContext";


const Note = ({ note, categoryId }) => {

  const todoContext = useContext(ToDoContext);
  const { deleteNote, checkNote } = todoContext;

  const [checked, setChecked] = useState(false);

  const onDelete = (e) => {
    e.preventDefault();
    deleteNote(note.id, categoryId);
  };

  const onCheckBox = (e) => {
    setChecked(e.currentTarget.checked);
    checkNote(note.id, categoryId);
  };

  return (
    <div className="note">
      {/*line-through if checked*/}
      <p style={checked ? {textDecoration: "line-through", color: "gray" } : {}}>{note.message}</p>
      
      <div className="handle-note">
      <input
        type="checkbox"
        onChange={(e) => onCheckBox(e)}
        checked={checked}
      />

      {/*Disable button if checked*/}
      {checked ? (
        <button disabled className="disable btn-todo btn--edit">
          Edit
        </button>
      ) : (
        <button className="btn-todo btn--edit">Edit</button>
      )}

      <button onClick={onDelete} className="btn-todo btn--delete">
        Delete
      </button>
    </div>

    </div>
  );
};

export default Note;
