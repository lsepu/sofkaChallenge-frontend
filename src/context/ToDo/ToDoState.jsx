import ToDoContext from "./ToDoContext";
import ToDoReducer from "./ToDoReducer";
import { useEffect, useReducer } from "react";

import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  ADD_NOTE,
  CHECK_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  LOAD_CATEGORIES
} from "../types";

//state handler for all actions related with the to-do
const ToDoState = ({ children }) => {
  const initialState = {
    listOfCategories: []
  };

  useEffect(() => {
    loadCategories();
  }, [])

  //load categories and notes
  const loadCategories = async() =>{
    const categories = await fetch('http://localhost:8081/api/v1/get/categories');
    const categoriesData = await categories.json();
    dispatch({
      type: LOAD_CATEGORIES,
      payload: categoriesData,
    });
  }

  //add new category
  const addCategory = async (categoryName) => {
    const newCategory = {
      name : categoryName
    }
    const categorySavedPromise = await fetch(
      `http://localhost:8081/api/v1/create/category`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newCategory),
      }
    );

    const categorySaved = await categorySavedPromise.json();

    dispatch({
      type: ADD_CATEGORY,
      payload: categorySaved,
    });
  };

  //delete category
  const deleteCategory = async (categoryToDeleteId) => {

    let response = await fetch(
      `http://localhost:8081/api/v1/delete/category/${categoryToDeleteId}`,
      {
        method: "DELETE",
      }
    );

    if(response.status === 200){
      dispatch({
        type: DELETE_CATEGORY,
        payload: categoryToDeleteId,
      });
    }
  };

  //add note
  const addNote = async (newNote) => {

    const noteSavedPromise = await fetch(
      `http://localhost:8081/api/v1/create/note`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newNote),
      }
    );

    const noteSaved = await noteSavedPromise.json();

    dispatch({
      type: ADD_NOTE,
      payload: noteSaved,
    });
  };

  //check note
  const checkNote = async (note) =>{
    let noteChecked = {...note, done:!note.done};

    let noteCheckedPromise = await fetch(
      `http://localhost:8081/api/v1/update/note`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(noteChecked),
      }
    );

    noteChecked = await noteCheckedPromise.json();

    dispatch({
      type: CHECK_NOTE,
      payload: noteChecked,
    });
  }

  //edit note
  const editNote = async (noteEdited) =>{

    let noteEditedPromise = await fetch(
      `http://localhost:8081/api/v1/update/note`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(noteEdited),
      }
    );

    noteEdited= await noteEditedPromise.json();

    dispatch({
      type: EDIT_NOTE,
      payload: noteEdited,
    });
  }

  //delete note
  const deleteNote = async (noteDeleted) => {

    let response = await fetch(
      `http://localhost:8081/api/v1/delete/note/${noteDeleted.id}`,
      {
        method: "DELETE",
      }
    );

    if( response.status === 200){
      dispatch({
        type: DELETE_NOTE,
        payload: noteDeleted
      });
    }
  };

  const [state, dispatch] = useReducer(ToDoReducer, initialState);

  return (
    <ToDoContext.Provider
      value={{ listOfCategories: state.listOfCategories, addCategory, addNote, deleteNote, deleteCategory, checkNote, editNote }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoState;
