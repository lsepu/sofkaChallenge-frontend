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
            return state;

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
            return state;

    }
}

export default reducer;