import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const TopNavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#donations', label: 'Donations' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact Us' },

  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/Images/saveAman.jpg"
                width={40}
                height={40}
                alt="Logo"
                className="h-10 w-10 rounded-full transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Save A Man Movement
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-2 py-1 text-sm font-medium group ${
                  activeLink === link.href
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform origin-left transition-transform duration-300 ${
                    activeLink === link.href
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </a>
            ))}
            <button className="ml-4 px-4 py-1.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5">
              Contact Admin
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'top-3'
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-md bg-gray-900/90">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                activeLink === link.href
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
              onClick={() => {
                setActiveLink(link.href);
                setIsMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button className="w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-base font-medium rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Join Group
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;