import {combineReducers} from "redux";

import userReducer from './userReducer';
import filterReducer from './filterReducer';

export default combineReducers({
    user: userReducer,
    filter: filterReducer
});
