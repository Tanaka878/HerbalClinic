import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Heart, 
  Leaf, 
  Users, 
  ArrowUp,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Professional Counseling', href: '#counseling' },
    { name: 'Daily Motivation', href: '#motivation' },
    { name: 'Herbal Products', href: '#herbs' },
    { name: 'WhatsApp Support', href: '#whatsapp' },
    { name: 'Wellness Programs', href: '#programs' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: <Facebook className="w-5 h-5" />, 
      href: '#', 
      color: 'hover:text-blue-500',
      bg: 'hover:bg-blue-500/10'
    },
    { 
      name: 'Twitter', 
      icon: <Twitter className="w-5 h-5" />, 
      href: '#', 
      color: 'hover:text-sky-500',
      bg: 'hover:bg-sky-500/10'
    },
    { 
      name: 'Instagram', 
      icon: <Instagram className="w-5 h-5" />, 
      href: '#', 
      color: 'hover:text-pink-500',
      bg: 'hover:bg-pink-500/10'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-5 h-5" />, 
      href: '#', 
      color: 'hover:text-blue-600',
      bg: 'hover:bg-blue-600/10'
    }
  ];


    function setHoveredSocial(name: string): void {
      const socialLink = socialLinks.find((social) => social.name === name);
      if (socialLink) {
        socialLink.icon = React.cloneElement(socialLink.icon, {
          className: `w-5 h-5 text-${socialLink.color.replace('hover:', '')}`
        });
      }
    }

  return (
    <>
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-600 to-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        } hover:-translate-y-1 hover:shadow-xl`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-green-400 to-blue-400 rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400 to-pink-400 rounded-full translate-x-48 translate-y-48"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main footer content */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  SaveAman
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming lives through natural wellness, professional counseling, and daily motivation. 
                Join our community for a healthier, happier you.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">1K+</div>
                  <div className="text-xs text-gray-500">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-xs text-gray-500">Success Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-xs text-gray-500">Support</div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center transition-all duration-300 ${social.color} ${social.bg} transform hover:-translate-y-1`}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-blue-400" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-purple-400" />
                Get In Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>+263780001324</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>musungaretanaka@gmail.com</span>
                </div>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                  <span>Cnr Angwa, Inez Terez<br />Harare</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <a
                  href="https://wa.me/+263780001324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <MessageCircle className="w-4 h-4" />
                  Join WhatsApp
                </a>
              </div>
            </div>
          </div>


          {/* Bottom section */}
          <div className="border-t border-gray-800 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} SaveAman. All rights reserved. Made with{' '}
                <Heart className="w-4 h-4 text-red-500 inline mx-1" />
                for your wellness.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;