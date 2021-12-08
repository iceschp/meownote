import React, { useState } from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

export const Navbar = () => {
    const test = 1;

    return (
        <Router>
        <div className="Navbar">
        <nav class="NavbarHomepage container">
            <a href="#" class="nav__logo">
                <img src="/images/meownote-logo.png" alt="meownote logo" class="nav__logo-img"/> 
                Meow Note
            </a>

            <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <a href="#features" class="nav__link active-link">Features</a>
                        </li>
                        <li class="nav__item">
                            <a href="/src/source.js" class="nav__link">Resource</a>
                        </li>
                        <li class="nav__item">
                            <a href="#AboutUs" class="nav__link">About Us</a>
                        </li>
                        <li class="nav__item">
                            <a href="#login" class="nav__link">Log in</a>
                        </li>
                        <li class="nav__item">
                            <button class="signup__btn">Sign Up</button>
                        </li>
                    </ul>
            </div>
        </nav>
        </div>
        </Router>
    )
};