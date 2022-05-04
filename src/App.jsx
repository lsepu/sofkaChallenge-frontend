import "./App.css";
import Categories from "./components/Categories";
import ToDoState from "./context/ToDo/ToDoState";

function App() {
  return (
    <ToDoState>
      <h1>Test</h1>
      <Categories />
    </ToDoState>
  );
}

export default App;
