import React, { Component } from "react";

export default class Resource extends Component {
    render() {
        return (
            <div className="detail__box">
                <h1>Resource</h1>
                <div className="row">
                    <div className="column">
                        <h2>Adobe Xd</h2>
                        <p>All in one UI/UX design tool.</p>
                        <img src="/images/xd.png"/>
                    </div>
                    <div className="column">
                        <h2>Javascript</h2>
                        <p>is the world’s most popular programming language.</p>
                        <img src="/images/javascript.png"/>
                    </div>
                    <div className="column">
                        <h2>React JS</h2>
                        <p>makes it painless to create interactive UIs.</p>
                        <img src="/images/react.png"/>
                    </div>
                </div>
            </div>
        )
    }
}