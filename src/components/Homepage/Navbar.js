import React, { useState } from "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
} from "react-router-dom";
import { HomeContent } from "./HomeContent";
import Features from "./Features";
import Resource from "./Resource";
import Aboutus from "./Aboutus";
import Signup from "./Signup";
import Login from "./Login";
export const Navbar = () => {
    const test = 1;

    return (
        <Router>
        <div className="Navbar">
        <nav class="NavbarHomepage container">
            <Link as={Link} to={"/homepage"} class="nav__logo">
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
                            <Link as={Link} to={"/Signup"}  class="nav__link">Sign up</Link>
                        </li>
                        <li class="nav__item">
                            <button Link as={Link} to={"/login"}  class="signup__btn">Log in</button>
                        </li>
                    </ul>
            </div>
        </nav>
        </div>
        <div>
            <Routes>
                <Route path="/homepage" element={ <HomeContent/> } />
                <Route path="/features" element={ <Features /> } />
                <Route path="/resource" element={ <Resource /> } />
                <Route path="/aboutus" element={ <Aboutus /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/signup" element={ <Signup /> } />
            </Routes>
        </div>
        </Router>
    )
};