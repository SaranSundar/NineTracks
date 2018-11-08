import React, {Component, Fragment} from 'react';
import './App.css';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import firebase from "../Firebase/Firebase";
import Channel from "../Channel/Channel";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
        this.provider = new firebase.auth.GoogleAuthProvider();
        this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().useDeviceLanguage();
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                console.log("Auth change: User signed in");
                this.setState({user})
            } else {
                // No user is signed in.
                console.log("Auth change: User signed out");
                this.setState({user})
            }
        });
    }

    loginWithGoogle = () => {
        console.log("User is logging in");
        firebase.auth().signInWithPopup(this.provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            console.log("User logged in success");
            this.setState({user});
            this.props.history.push('/channels');
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            console.log("Error: " + error);
            // ...
        });
    };

    logout = () => {
        console.log("user signing out");
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log("user sign out success");
            this.props.history.push('/');
        }).catch((error) => {
            // An error happened.
            console.log("Error: " + error);
        });
    };


    render() {
        return (
            <Fragment>
                <NavBar user={this.state.user} logout={this.logout}/>
                <Switch>
                    <Route path='/channels'
                           render={(props) => <Channel {...props}
                                                       user={this.state.user}/>}/>
                    <Route exact path='/'
                           render={(props) => <Home {...props} login={this.loginWithGoogle}
                                                    user={this.state.user}/>}/>
                    <Redirect to="/"/>
                </Switch>
            </Fragment>
        );
    }
}

export default withRouter(App);
