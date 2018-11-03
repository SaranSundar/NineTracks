import React, {Component} from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../Home/Home";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Redirect to="/"/>
            </Switch>
        );
    }
}

export default App;
