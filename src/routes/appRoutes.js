import {Switch, BrowserRouter, Route} from "react-router-dom";
import React from 'react';

import UserDashboard from './../conatiners/userDashboard';
import AddUser from './../conatiners/addUser';
import EditUser from './../conatiners/editUser';
import NotFoundPage from './../components/notFound';
import Header from './../components/header';

class AppRoutes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" component={UserDashboard} exact={true} />
                        <Route path="/addUser" component={AddUser}/>
                        <Route path="/editUser/:id" component={EditUser}/>
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRoutes;