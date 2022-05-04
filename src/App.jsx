import "./App.css";
import AddCategory from "./components/AddCategory";
import Categories from "./components/Categories";
import ToDoState from "./context/ToDo/ToDoState";

function App() {
  return (
    <ToDoState>
      <div className="toDo-wrapper">
        <h1 className="toDo-title">To-Do list</h1>
        <AddCategory />
        <Categories />
      </div>
    </ToDoState>
  );
}

export default App;
