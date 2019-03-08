import * as actionTypes from './../actions/actionTypes';
const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_USER: {
            return [...state, action.payload];
        }
        case actionTypes.EDIT_USER: {
            const users = [...state];
            let index;
            for(let i = users.length; i--;){
                if(users[i].id === action.payload.id) {
                    index = i;
                    break;
                }
            }
            if (index !== undefined) {
                users[index] = {
                    ...users[index],
                    ...action.payload
                }
            }
            return users;
        }
        default:
            return state;
    }
};