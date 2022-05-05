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
            return state;

        case EDIT_NOTE:
            return state;

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