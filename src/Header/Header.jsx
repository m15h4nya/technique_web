import React, { useState } from 'react';
import './Header.scss'


export default function Header() {
    const [fileName, setFileName] = useState('filename');
    const [isEditMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode(!isEditMode);
    };

    return (
        <section className="content__header">
            <h1 className="content__title">{fileName}</h1>
            <nav className="content__nav">
                <button className="content__button content__button--regular" type="button" aria-label="Save" disabled>
                    Save
                </button>
                <a className="content__link content__link--versions" aria-label="Versions" disabled>
                    Versions
                </a>
                <button
                    id="toggleButton"
                    className={`nav__button nav__button--toggle toggle-button ${isEditMode ? 'active' : ''}`}
                    type="button"
                    aria-label="Toggle Edit Mode"
                    onClick={toggleEditMode}
                    disabled>

                    <span className="content__button-half left-half button-half">{isEditMode ? 'Read' : 'Edit'}</span>
                    <span className="content__button-half right-half button-half active">{isEditMode ? 'Edit' : 'Read'}</span>
                </button>
            </nav>
        </section>
    );
};