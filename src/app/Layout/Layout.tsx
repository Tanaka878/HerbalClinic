import React from 'react';
import TopNavBar from '../Views/TopNavBar';
import Hero from '../Views/Hero';
import Services from '../Views/Services';
import Testimonials from '../Views/Testimonials';
import Footer from '../Views/Footer';
const Layout: React.FC = ({ }) => {
    return (
        <div className="layout">
            <header className="header">
                <TopNavBar />
            </header>
            <main className="main-content">
                <Hero/>
                <Services/>
                <Testimonials/>

            </main>
            <footer className="footer">
                {/* Footer content goes here */}
             <Footer/>
                
            </footer>
           
        </div>
    );
};

export default Layout;