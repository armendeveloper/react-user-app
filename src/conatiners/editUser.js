import React from 'react';
import {connect} from 'react-redux';

import {editUser} from "../actions/actions";
import UserForm from "./userForm";

class EditUser  extends React.Component {
    render() {
        return (
            <UserForm className="content" user={this.props.user} onSubmit={(user) =>{
                this.props.editUser(this.props.user.id, user);
                this.props.history.push("/");
            }}/>
        )
    }
}

const mapStateToProps = (state, props) => {
    return  {
        user: state.user.find((user) => user.id === +props.match.params.id)
    };
};

const mapDispatchToProps = {
    editUser
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
