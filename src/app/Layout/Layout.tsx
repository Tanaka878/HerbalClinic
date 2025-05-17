import React from 'react';
import TopNavBar from '../Views/TopNavBar';
const Layout: React.FC = ({ }) => {
    return (
        <div className="layout">
            <header className="header">
                <TopNavBar />
            </header>
            <main className="main-content">
                {/* Main content goes here */}
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
            </main>
            <footer className="footer">
                {/* Footer content goes here */}
                <p>Footer content</p>
            </footer>
           
        </div>
    );
};

export default Layout;