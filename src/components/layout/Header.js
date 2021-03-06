import React from "react";

export const Header = () => {
    const x = 1;

    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <p>🐱</p>
                    <img src="/images/logo.png" alt="meownote" />
                </div>
                <div className="settings">
                    <ul>
                        <li>+</li>
                        <li>Pizza Slice!</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};