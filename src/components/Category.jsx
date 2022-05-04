import Note from "./Note";

const Category = ({ category }) => {
  const { title, notes } = category;

  return (
    <div className="category-wrapper">

      <div className="category-info">
        <h1>{title}</h1>
      </div>

      <div className="notes-wrapper">
        
        {/* Add a new note or edit current note*/}
        <div className="inputButton-wrapper">
          <input type="text" />
          <button>Create</button>
        </div>

        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Category;
