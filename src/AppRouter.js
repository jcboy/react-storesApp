import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import {Navbar} from "./components/Navbar";
import {Dashboard} from "./components/Dashboard";
import {Stores} from "./components/Stores";
import UsersClass from "./components/UsersClass";
import {UsersFunction} from "./components/UsersFunction";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={ Dashboard} />
                    <Route exact path='/stores' component={ Stores } />
                    <Route exact path='/userscl' component={ UsersClass } />
                    <Route exact path='/usersfn' component={ UsersFunction } />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}









