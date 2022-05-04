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
    listOfCategories: [
      {
        id: 1,
        name: "test category",
        notes: [
          {
            id: 1,
            message: "test message",
            done: false,
          },
          {
            id: 2,
            message: "test message",
            done: false,
          },
        ],
      },

      {
        id: 2,
        name: "test category 2",
        notes: [
          {
            id: 3,
            message: "test message",
            done: false,
          },
        ],
      },
    ],
  };

  //load categories and notes

  //add new category
  const addCategory = (category) => {

    const categoryObject = {id: Math.floor(Math.random() * 100), name: category, notes: []};

    dispatch({
      type: ADD_CATEGORY,
      payload: categoryObject
    })
  }

  //add note

  //check note

  //edit note

  //delete note

  const [state, dispatch] = useReducer(ToDoReducer, initialState);

  return (
    <ToDoContext.Provider value={{ listOfCategories: state.listOfCategories, addCategory }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoState;
