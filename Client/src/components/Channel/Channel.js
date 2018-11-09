import React, {Component} from 'react';
import "./Channel.css";
import logo2 from "./ChannelAssets/Logo2.png";

class Channel extends Component {

    render() {
        return (
            <div className="Channel">
                <div className="channel-logo-container">
                    <img src={logo2}/>
                </div>
                {this.joinChannel()}
            </div>
        );
    }

    joinChannel = () => {
        return (
            <div className="options-grid">
                <input placeholder="Enter a channel..."/>
                <button>Join</button>
            </div>
        );
    }
}

export default Channel;
