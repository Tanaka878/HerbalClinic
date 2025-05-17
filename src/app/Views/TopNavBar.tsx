import React, { useState } from 'react';
import './TopNavBar.css'; // Create a CSS file for styling

const TopNavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="top-navbar">
            <div className="navbar-content">
                <div className="navbar-icon">
                    {/* Insert your icon here */}
                    <img src="/path/to/icon.png" alt="Logo" className="icon" />
                </div>
                <div className="navbar-title">My App</div>
                <div className="burger-menu" onClick={toggleMenu}>
                    <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="dropdown-menu">
                    <a href="/page1">Page 1</a>
                    <a href="/page2">Page 2</a>
                    <a href="/page3">Page 3</a>
                </div>
            )}
        </nav>
    );
};

export default TopNavBar;