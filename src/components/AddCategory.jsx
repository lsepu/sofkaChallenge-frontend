import React, { useContext, useState } from "react";
import ToDoContext from "../context/ToDo/ToDoContext";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");

  const toDoContext = useContext(ToDoContext);
  const { addCategory } = toDoContext;

  const handleCategory = (e) => {
    e.preventDefault();
    if (categoryName) {

      const newCategory = {
        name: categoryName
      }

      addCategory(newCategory);
      setCategoryName('');
    } else{
      alert("Please write a list name");
    }
  };

  return (
    /* Add a new list*/
    <div className="inputButton-wrapper left-align">
      <input
        onChange={(e) => {
          setCategoryName(e.target.value);
        }}
        value={categoryName}
        type="text"
      />
      <button className="btn-todo" onClick={handleCategory}>Add list</button>
    </div>
  );
};

export default AddCategory;
