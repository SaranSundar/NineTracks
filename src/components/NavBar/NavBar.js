import React, {Component} from 'react';
import "./NavBar.css";

class NavBar extends Component {

    render() {
        return (
            <div className="NavBar">
               <ul className="list-style">
                   <li>About</li>
                   <li style={{color:"black"}}>/</li>
                   <li>Contact Us</li>
               </ul>
            </div>
        );
    }
}

export default NavBar;
