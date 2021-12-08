import React, { Component } from "react";

export default class Features extends Component {
    render() {
        return (
            <div className="feature__box">
                <h1>Features</h1>
                <div className="row">
                    <div className="column">
                        <h1>test</h1>
                        <h2>Organizaed</h2>
                        <p>A lot of folders as much as you want</p>
                        <img src="/images/organized.png"/>
                    </div>
                    <div className="column">
                        <h2>Productivity</h2>
                        <p>Work smart and Fast</p>
                        <img src="/images/productivity.png"/>
                    </div>
                    <div className="column">
                        <h2>Share</h2>
                        <p>Sharing to another app</p>
                        <img src="/images/share.png" />
                    </div>
                </div>
            </div>
        )
    }
}