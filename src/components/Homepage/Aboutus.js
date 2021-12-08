import React, { Component } from "react";

export default class Aboutus extends Component {
    render() {
        return (
            <div className="aboutus__box">
                <h1>Team Meow Note</h1>
                <p>Our mission is to help students organize their life easier.</p>
                <span className="container__row">
                    <div className="column-1">
                        <img src="/images/milk.png" />
                        <h2>Jiraporn Ngewdang</h2>
                        <p>Student</p>
                    </div>
                    <div className="column-1">
                        <img src="/images/ice.png" />
                        <h2>Warunya Sangchompoo</h2>
                        <p>Student</p>
                    </div>
                </span>
            </div>
        )
    }
}