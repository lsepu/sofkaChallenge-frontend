import ToDoContext from "./ToDoContext";
import ToDoReducer from "./ToDoReducer";
import { useReducer } from "react";

import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  ADD_NOTE,
  CHECK_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
} from "../types";

//state handler for all actions related with the to-do
const ToDoState = ({ children }) => {
  const initialState = {
    listOfTodos: [
      {
        id: 1,
        title: "test category",
        notes: [
          {
            id: 1,
            title: "asd",
            message: "test",
            done: false,
          },
        ],
      },

      {
        id: 2,
        title: "test category 2",
        notes: [
          {
            id: 2,
            title: "test 2",
            message: "test message",
            done: false,
          },
        ],
      },

    ],
  };

  //load categories and notes

  //add category

  //add note

  //check note

  //edit note

  //delete note

  const [state, dispatch] = useReducer(ToDoReducer, initialState);

  return <ToDoContext.Provider>{children}</ToDoContext.Provider>;
};

export default ToDoState;
