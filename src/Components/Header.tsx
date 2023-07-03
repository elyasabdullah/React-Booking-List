import React, {useContext, useState} from 'react';
import { AppContext } from '../App';

export default function Header() {
    const {themeState, setThemeState} = useContext(AppContext);
    function handleModeClick() {
        setThemeState(!themeState)
    }
    return (
        <div className="header">
            <div className="container">
                <h2>Add Book</h2>
                <div className="theme-container">
                    <div
                        onClick={handleModeClick}
                        className={themeState ? 'toggle-icon dark':'toggle-icon light'}>
                        <span 
                            className={themeState ? 'dark':'light'}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}