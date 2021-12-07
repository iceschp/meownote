import React, { useState } from "react";

export const Navbar = () => {
    const test = 1;

    return (
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
                            <a href="#Resource" class="nav__link">Resource</a>
                        </li>
                        <li class="nav__item">
                            <a href="#AboutUs" class="nav__link">About Us</a>
                        </li>
                    </ul>
            </div>
        </nav>
        </div>
    )
};