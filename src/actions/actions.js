import * as actionTypes from './actionTypes';

export const addUser = (user) => {
    return {
       type: actionTypes.ADD_USER,
       payload: {
           ...user,
           id: new Date().getTime()
       }
    }
};

export const editUser = (id, user) => {
    return {
        type: actionTypes.EDIT_USER,
        payload: {
            ...user,
            id
        }
    }
};

export const setFirstNameFilter = (text) => {
    return {
        type: actionTypes.SET_FIRSNAME_FILTER,
        text
    }
};