import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    ADD_NOTE,
    CHECK_NOTE,
    EDIT_NOTE,
    DELETE_NOTE
} from '../types'


function reducer(state, action){
    switch(action.type) {

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
            const { newNote, categoryId } = action.payload;

            let categoriesWithNoteAdded = state.listOfCategories.map(category => {
                if(category.id === categoryId ){
                    category.notes.push(newNote);
                }
                return category;
            })

            const stateWithNewNote = {...state, listOfCategories: categoriesWithNoteAdded};
            return stateWithNewNote;

        case CHECK_NOTE:
            const {NoteCheckedId, categoryNoteId}= action.payload;

            let categoriesWithNoteChecked = state.listOfCategories.map(category => {
                if(category.id === categoryNoteId){
                   const notesChecked = category.notes.map(note => note.id === NoteCheckedId ? {...note, done: !note.done} : note);
                   return {...category, notes: notesChecked};
                }
               return category;
            });

            const stateWithNoteChecked = {...state, listOfCategories: categoriesWithNoteChecked};
            return stateWithNoteChecked;

        case EDIT_NOTE:
            const {noteMessage, noteEditedId, categoryNoteEditedId} = action.payload;

            let categoriesWithNoteEdited = state.listOfCategories.map(category => {
                if(category.id === categoryNoteEditedId){
                   const notesEdited = category.notes.map(note => note.id === noteEditedId ? {...note, message: noteMessage} : note);
                   return {...category, notes: notesEdited};
                }
               return category;
            });

            const stateWithNoteEdited = {...state, listOfCategories: categoriesWithNoteEdited};
            return stateWithNoteEdited;

        case DELETE_NOTE:
            const { noteId, currentCategoryId } = action.payload;

            let categoriesWithNoteRemoved = state.listOfCategories.map(category => {
                if(category.id === currentCategoryId ){
                    const notesUpdated = category.notes.filter(note => note.id !== noteId);
                    return {...category, notes: notesUpdated};
                }
                return category;
            })

            const stateWithNoteRemoved = {...state, listOfCategories: categoriesWithNoteRemoved};
            return stateWithNoteRemoved;

    }
}

export default reducer;