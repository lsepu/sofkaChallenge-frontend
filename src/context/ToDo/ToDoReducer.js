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
            return state;
        
        case DELETE_CATEGORY:
            return state;

        case ADD_NOTE:
            return state;

        case CHECK_NOTE:
            return state;

        case EDIT_NOTE:
            return state;

        case DELETE_NOTE:
            return state;

    }
}

export default reducer;