import React, { useContext, useState } from "react";
import ToDoContext from "../context/ToDo/ToDoContext";

const Note = ({ note, categoryId }) => {
  const todoContext = useContext(ToDoContext);
  const { deleteNote, checkNote, editNote } = todoContext;

  const [checked, setChecked] = useState(note.done);
  const [edit, setEdit] = useState(false);
  const [message, setMessage] = useState("");

  const onDelete = (e) => {
    e.preventDefault();
    deleteNote(note);
  };

  const onCheckBox = (e) => {
    if (edit) {
      clearEdit();
    }
    setChecked(e.currentTarget.checked);

    const noteChecked = {
      ...note, done: !note.done
    }

    checkNote(noteChecked);
  };

  const onEdit = (e) => {
    if (message) {
      const noteEdited = {...note, message: message};
      editNote(noteEdited);
    }
    clearEdit();
  };

  const clearEdit = () => {
    setEdit(false);
    setMessage("");
  };

  return (
    <>
      <div className="note">
        {/*line-through if checked*/}
        <p
          style={
            checked ? { textDecoration: "line-through", color: "gray" } : {}
          }
        >
          {note.message}
        </p>

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
            <button
              onClick={() => setEdit(true)}
              className="btn-todo btn--edit"
            >
              Edit
            </button>
          )}

          <button onClick={onDelete} className="btn-todo btn--delete">
            Delete
          </button>
        </div>
      </div>

      {/* if edit state is true */}
      {edit && (
        <div className="inputButton-wrapper">
          <input
            placeholder="New message"
            style={{ fontSize: "1rem" }}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            type="text"
          />
          <button onClick={onEdit} className="btn-todo btn--edit">
            Update
          </button>
          <button onClick={clearEdit} className="btn-todo btn--delete">
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default Note;
