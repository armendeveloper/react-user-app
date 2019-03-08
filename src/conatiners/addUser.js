import React from 'react';
import {connect} from 'react-redux';

import UserForm from "./userForm";
import {addUser} from "./../actions/actions";

class AddUser extends React.Component {
    render() {
        return (
            <UserForm  onSubmit={(user) => {
                this.props.addUser(user);
                this.props.history.push("/");
            }}/>
        )
    }
};

const mapDispatchToProps = {
    addUser
};

export default connect(null, mapDispatchToProps)(AddUser);