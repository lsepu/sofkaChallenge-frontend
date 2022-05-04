import { useContext } from "react";
import ToDoContext from "../context/ToDo/ToDoContext";
import Category from "./Category";

const Categories = () => {
  const toDoContext = useContext(ToDoContext);

  const { listOfCategories } = toDoContext;

  return (
    <div className="categories-wrapper">
      {listOfCategories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
