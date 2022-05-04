import "./App.css";
import Categories from "./components/Categories";
import ToDoState from "./context/ToDo/ToDoState";

function App() {
  return (
    <ToDoState>
      <div className="toDo-wrapper">
        <h1 className="toDo-title">To-Do list</h1>

        {/* Add a new list*/}
        <div className="inputButton-wrapper left-align" >
          <input type="text" />
          <button>Add list</button>
        </div>

        <Categories />
      </div>
    </ToDoState>
  );
}

export default App;
