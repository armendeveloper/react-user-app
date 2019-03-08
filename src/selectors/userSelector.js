import {createSelector} from 'reselect';

const usersSelector = (state) => state.user;
const setFirstNameFilterSelector = (state) => state.filter.fistNameFilter;

export default createSelector(
    [usersSelector, setFirstNameFilterSelector],
    (users, filter) => {
        return users.filter((user) => user.firstName.toLowerCase().includes(filter.toLowerCase()))
    }
)