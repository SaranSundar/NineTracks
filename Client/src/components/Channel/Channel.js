import React, {Component} from 'react';
import "./Channel.css";
import logo2 from "./ChannelAssets/Logo2.png";

class Channel extends Component {

    render() {
        return (
            <div className="Channel">
                <div className="channel-logo-container">
                    {/*<img src={logo2}/>*/}
                    {this.showPlayingSong()}
                </div>
                {this.joinChannel()}
            </div>
        );
    }

    showPlayingSong = () => {
        return (
            <div className="songs-grid">
                {/*Figure out left to right text car animation*/}
                <h1>Currently playing...</h1>
                <div>
                    <i className="fas fa-play"></i>
                    <i className="fas fa-pause"></i>
                </div>
            </div>
        );
    };

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
