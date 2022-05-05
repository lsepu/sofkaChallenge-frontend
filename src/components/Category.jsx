import { useContext } from "react";
import ToDoContext from "../context/ToDo/ToDoContext";
import AddNote from "./AddNote";
import Note from "./Note";

const Category = ({ category }) => {
  const { id, name, notes } = category;

  const todoContext = useContext(ToDoContext);
  const { deleteCategory } = todoContext;

  const onDelete = () => {
    deleteCategory(id);
  };

  return (
    <div className="category-wrapper">
      <div className="category-info">
        <h1>{name}</h1>
        <button onClick={onDelete} className="btn-todo btn--delete">
          Delete
        </button>
      </div>

      <div className="notes-wrapper">
        <AddNote categoryId={id} />
        {notes.map((note) => (
          <Note key={note.id} note={note} categoryId={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;
