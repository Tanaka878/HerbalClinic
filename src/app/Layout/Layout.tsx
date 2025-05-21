import React from 'react';
import TopNavBar from '../Views/TopNavBar';
import Hero from '../Views/Hero';
const Layout: React.FC = ({ }) => {
    return (
        <div className="layout">
            <header className="header">
                <TopNavBar />
            </header>
            <main className="main-content">
                <Hero/>

            </main>
            <footer className="footer">
                {/* Footer content goes here */}
                <p>Footer content</p>
            </footer>
           
        </div>
    );
};

export default Layout;