import React from 'react';
import TopNavBar from '../Views/TopNavBar';
import Hero from '../Views/Hero';
import Services from '../Views/Services';
const Layout: React.FC = ({ }) => {
    return (
        <div className="layout">
            <header className="header">
                <TopNavBar />
            </header>
            <main className="main-content">
                <Hero/>
                <Services/>

            </main>
            <footer className="footer">
                {/* Footer content goes here */}
                <p>Footer content</p>
            </footer>
           
        </div>
    );
};

export default Layout;