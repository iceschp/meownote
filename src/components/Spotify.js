import React, { Component } from "react";

function Spotify(props) {
    return (props.trigger) ? (
        <div className="spotify__popup">
            <div className="popup__inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)} title="Close tab">X</button>
                {props.children}
            </div>
        </div>
    ) : "";
};

export default Spotify;