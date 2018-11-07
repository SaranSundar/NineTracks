import React, {Component} from 'react';
import "./Home.css";
import background from "./HomeAssets/background.png"
import logo1 from "./HomeAssets/Logo1.png"
import logo2 from "./HomeAssets/Logo2.png"
import firebase from "../Firebase/Firebase"

class Home extends Component {

    constructor(props){
        super(props);
        this.provider = new firebase.auth.GoogleAuthProvider();
    }

    render() {
        return (
            <div className="home">
                <div className="home-logo-container">
                    <img src={logo1}/>
                </div>
                <div className="home-background-container">
                    <img src={background}/>
                    <div className="home-buttons-container">
                        <button className="material-button">SIGN UP</button>
                        <button className="material-button">LOG IN</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;