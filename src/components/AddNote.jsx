import React, { useContext, useState } from "react";
import ToDoContext from "../context/ToDo/ToDoContext";

const AddNote = ({ categoryId }) => {
  const [note, setNote] = useState("");

  const todoContext = useContext(ToDoContext);

  const { addNote } = todoContext;

  const handleNote = (e) => {
    e.preventDefault();
    if (note) {
      addNote(note, categoryId);
    }
  };

  return (
    /* Add a new note or edit current note*/
    <div className="inputButton-wrapper">
      <input
        onChange={(e) => {
          setNote(e.target.value);
        }}
        type="text"
      />
      <button className="btn-todo" onClick={handleNote}>Create</button>
    </div>
  );
};

export default AddNote;
