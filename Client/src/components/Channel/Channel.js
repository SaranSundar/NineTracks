import React, {Component} from 'react';
import "./Channel.css";

class Channel extends Component {

    render() {
        return (
            <div>
                {this.joinChannel()}
            </div>
        );
    }

    joinChannel = () => {
        return (
            <div className="join-channel">
                <input placeholder="Enter a channel..."/>
                <button>join</button>
            </div>
        );
    }
}

export default Channel;
