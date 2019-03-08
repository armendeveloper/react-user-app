import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to="/" activeClassName="active" exact={true}>Dashboard</NavLink>
            <NavLink to="/addUser" activeClassName="active">Add User</NavLink>


        </div>
    );
};

export default Header;