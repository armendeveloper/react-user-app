import React from 'react';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';

import UserListItem from './../components/userListItem';
import usersSelector from './../selectors/userSelector';

class UsersList extends React.Component {
    render() {
        return (
            <table className="users-table">
                <thead>
                   <tr>
                       <th>First Name</th>
                       <th>Last Name</th>
                       <th>Age</th>
                       <th>Link</th>
                   </tr>
                </thead>
                <tbody>
                {this.props.users.map((user) => (<UserListItem key={user.id} {...user} />))}
                </tbody>

            </table>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      users: usersSelector(state)
  }
};

export default  connect(mapStateToProps)(UsersList);