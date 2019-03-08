import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = ({firstName, lastName, age, id}) => {
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td><Link to={'/editUser/' + id}>Edit</Link></td>
        </tr>
    )
};

export default UserListItem;