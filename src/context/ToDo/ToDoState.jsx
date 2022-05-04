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
            id: 4,
            message: "test message",
            done: false,
          },
        ],
      },
    ],
  };

  //load categories and notes

  //add new category
  const addCategory = (categoryName) => {
    const categoryObject = {
      id: Math.floor(Math.random() * 100),
      name: categoryName,
      notes: [],
    };

    dispatch({
      type: ADD_CATEGORY,
      payload: categoryObject,
    });
  };

  //delete category

  //add note

  const addNote = (noteMessage, categoryId) => {
    const newNote = {
      id: Math.floor(Math.random() * 100),
      message: noteMessage,
      done: false,
    };

    dispatch({
      type: ADD_NOTE,
      payload: { newNote, categoryId },
    });
  };

  //check note

  //edit note

  //delete note

  const deleteNote = (noteId, currentCategoryId) => {
    dispatch({
      type: DELETE_NOTE,
      payload: { noteId, currentCategoryId },
    });
  };

  const [state, dispatch] = useReducer(ToDoReducer, initialState);

  return (
    <ToDoContext.Provider
      value={{ listOfCategories: state.listOfCategories, addCategory, addNote, deleteNote }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoState;
