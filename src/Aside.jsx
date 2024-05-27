import React, { useState } from 'react';


export default function Aside() {
    const [isLoginPanelVisible, setLoginPanelVisible] = useState(false);

    const toggleLoginPanel = () => {
        setLoginPanelVisible(!isLoginPanelVisible);
    };
    return (
        <aside className="sidebar">
            <nav className="sidebar__nav">
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <button
                            id="loginLink"
                            className="sidebar__link sidebar__link--card-trigger"
                            aria-label="Log in"
                            onClick={toggleLoginPanel}>
                            <img className="sidebar__icon sidebar__icon--card" src="src/images/log-in.svg" alt="Log in" />
                        </button>
                    </li>
                    <li className="sidebar__item">
                        <button className="sidebar__link" aria-label="Search">
                            <img className="sidebar__icon" src="src/images/search.svg" alt="Search" />
                        </button>
                    </li>
                </ul>
                {isLoginPanelVisible && (
                    <div className="sidebar__login-panel" id="loginPanel">
                        <a className="sidebar__login-button login-button" href="log-in.html" aria-label="Log in">Log in</a>
                        <a className="sidebar__logout-button logout-button" aria-label="Log out">Log out</a>
                    </div>
                )};
            </nav>
        </aside>
    );
}