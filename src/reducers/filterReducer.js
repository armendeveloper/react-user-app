import * as actionTypes from './../actions/actionTypes';

const initialState = {
    fistNameFilter: ""
};

export default (state = initialState, action) => {
    if(action.type === actionTypes.SET_FIRSNAME_FILTER) {
        return {
            ...state,
            fistNameFilter: action.text
        };
    }
    return state;
}