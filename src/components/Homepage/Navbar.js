import React, { useState } from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
} from "react-router-dom";
import Features from "./Features";
import { HomeContent } from "./HomeContent";

export const Navbar = () => {
    const test = 1;

    return (
        <Router>
        <div className="Navbar">
        <nav class="NavbarHomepage container">
            <Link as={Link} to={"/home"} class="nav__logo">
                <img src="/images/meownote-logo.png" alt="meownote logo" class="nav__logo-img"/> 
                Meow Note
            </Link>

            <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav__item">
                            <Link as={Link} to={"/features"} class="nav__link">Features</Link>
                        </li>
                        <li class="nav__item">
                            <Link as={Link} to={"/resource"} class="nav__link">Resource</Link>
                        </li>
                        <li class="nav__item">
                            <Link as={Link} to={"/aboutus"} class="nav__link">About Us</Link>
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
        
        <div>
            <Routes>
                <Route path="/home" element={ <HomeContent /> } />
                <Route path="/features" element={ <Features /> } />
            </Routes>
        </div>
        </Router>
    )
};