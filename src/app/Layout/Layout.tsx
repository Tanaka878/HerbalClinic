import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div>
            <header>
                <nav>
                    {/* Add your navigation links here */}
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                {/* Add your footer content here */}
            </footer>
        </div>
    );
};

export default Layout;