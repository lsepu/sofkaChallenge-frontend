import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    ADD_NOTE,
    CHECK_NOTE,
    EDIT_NOTE,
    DELETE_NOTE,
    LOAD_CATEGORIES
} from '../types'


function reducer(state, action){
    switch(action.type) {

        case LOAD_CATEGORIES:
            const categoriesData = action.payload;
            return {...state, listOfCategories: categoriesData}

        case ADD_CATEGORY:
            const newCategory = action.payload;
            const CategoriesWithAddedCategory = [...state.listOfCategories, newCategory];
            const StateWithNewCategory = {...state, listOfCategories : CategoriesWithAddedCategory};
            return StateWithNewCategory;
        
        case DELETE_CATEGORY:
            const categoryToDeleteId = action.payload;
            const categoriesFiltered = state.listOfCategories.filter(category => category.id !== categoryToDeleteId);
            const stateWithCategoryDeleted = {...state, listOfCategories: categoriesFiltered};
            return stateWithCategoryDeleted;

        case ADD_NOTE:
            const newNote = action.payload;

            let categoriesWithNoteAdded = state.listOfCategories.map(category => {
                if(category.id === newNote.fkCategoryId ){
                    category.notes.push(newNote);
                }
                return category;
            })

            const stateWithNewNote = {...state, listOfCategories: categoriesWithNoteAdded};
            return stateWithNewNote;

        case CHECK_NOTE:
            const noteChecked= action.payload;

            let categoriesWithNoteChecked = state.listOfCategories.map(category => {
                if(category.id === noteChecked.fkCategoryId ){
                   const notesChecked = category.notes.map(note => note.id === noteChecked.id ? {...note, done: noteChecked.done} : note);
                   return {...category, notes: notesChecked};
                }
               return category;
            });

            const stateWithNoteChecked = {...state, listOfCategories: categoriesWithNoteChecked};
            return stateWithNoteChecked;

        case EDIT_NOTE:
            const noteEdited = action.payload;

            let categoriesWithNoteEdited = state.listOfCategories.map(category => {
                if(category.id === noteEdited.fkCategoryId){
                   const notesEdited = category.notes.map(note => note.id === noteEdited.id ? {...note, message: noteEdited.message} : note);
                   return {...category, notes: notesEdited};
                }
               return category;
            });

            const stateWithNoteEdited = {...state, listOfCategories: categoriesWithNoteEdited};
            return stateWithNoteEdited;

        case DELETE_NOTE:
            const noteDeleted = action.payload;

            let categoriesWithNoteRemoved = state.listOfCategories.map(category => {
                if(category.id === noteDeleted.fkCategoryId ){
                    const notesUpdated = category.notes.filter(note => note.id !== noteDeleted.id);
                    return {...category, notes: notesUpdated};
                }
                return category;
            })

            const stateWithNoteRemoved = {...state, listOfCategories: categoriesWithNoteRemoved};
            return stateWithNoteRemoved;

    }
}

export default reducer;