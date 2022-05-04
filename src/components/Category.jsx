import Note from "./Note";

const Category = ({ category }) => {
  const { title, notes } = category;

  return (
    <div>
      <h1>{title}</h1>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Category;
