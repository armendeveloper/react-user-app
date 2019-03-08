import React from 'react';
import {connect} from 'react-redux';

import UserList from './usersList';
import Search from './../components/saech';
import {setFirstNameFilter} from "../actions/actions";

class UserDashboard extends  React.Component{
    render() {
        return (
            <div className="content">
                <Search onChange={this.props.setFirstNameFilter}/>
                <UserList/>
            </div>
        )
    }
}

const mapDispatchToProps = {
    setFirstNameFilter
};

export default connect(null, mapDispatchToProps)(UserDashboard);


