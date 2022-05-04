import AddNote from "./AddNote";
import Note from "./Note";

const Category = ({ category }) => {
  const { id, name, notes } = category;

  return (
    <div className="category-wrapper">

      <div className="category-info">
        <h1>{name}</h1>
      </div>

      <div className="notes-wrapper">
        <AddNote categoryId={id}/>
        {notes.map((note) => (
          <Note key={note.id} note={note} categoryId={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;
