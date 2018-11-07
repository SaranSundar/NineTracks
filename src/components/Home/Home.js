import React, {Component} from 'react';
import "./Home.css";
import background from "./HomeAssets/background.png"
import logo1 from "./HomeAssets/Logo1.png"
import logo2 from "./HomeAssets/Logo2.png"
import firebase from "../Firebase/Firebase"

class Home extends Component {

    constructor(props) {
        super(props);
        this.provider = new firebase.auth.GoogleAuthProvider();
        this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().useDeviceLanguage();
    }

    loginWithGoogle = () => {
        firebase.auth().signInWithPopup(this.provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
        });
    };

    render() {
        return (
            <div className="home">
                <div className="home-logo-container">
                    <img src={logo1}/>
                </div>
                <div className="home-background-container">
                    <img src={background}/>
                    <div className="home-buttons-container">
                        <button className="material-button" onClick={this.loginWithGoogle}>SIGN UP</button>
                        <button className="material-button" onClick={this.loginWithGoogle}>LOG IN</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;