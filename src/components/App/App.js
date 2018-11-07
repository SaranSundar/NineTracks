import React, {Component, Fragment} from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";

class App extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Redirect to="/"/>
                </Switch>
            </Fragment>
        );
    }
}

export default App;
