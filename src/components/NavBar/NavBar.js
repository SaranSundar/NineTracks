import React, {Component} from 'react';
import "./NavBar.css";
import firebase from "../Firebase/Firebase";

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSignOut: false
        };
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                this.setState({showSignOut: true})
            } else {
                // No user is signed in.
                this.setState({showSignOut: false})
            }
        });
    }

    signOutUser = () => {
        console.log("SIGNING OUT USER");
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log("SIGN OUT SUCCESS");
        }).catch((error) => {
            // An error happened.
        });
    };

    render() {
        return (
            <div className="NavBar">
                <ul className="list-style">
                    <li>About</li>
                    <li style={{color: "black"}}>/</li>
                    <li>Contact Us</li>
                    {this.state.showSignOut && <li className="right-side">
                        <button className="material-button" onClick={this.signOutUser}>SIGN OUT</button>
                    </li>}
                </ul>
            </div>
        );
    }
}

export default NavBar;
