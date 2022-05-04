import React, { useContext, useState } from "react";
import ToDoContext from "../context/ToDo/ToDoContext";

const AddCategory = () => {
  const [category, setCategory] = useState("");

  const toDoContext = useContext(ToDoContext);
  const { addCategory } = toDoContext;

  const handleCategory = (e) => {
    e.preventDefault();
    if (category) {
      addCategory(category);
    }
  };

  return (
    /* Add a new list*/
    <div className="inputButton-wrapper left-align">
      <input
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        type="text"
      />
      <button onClick={handleCategory}>Add list</button>
    </div>
  );
};

export default AddCategory;
