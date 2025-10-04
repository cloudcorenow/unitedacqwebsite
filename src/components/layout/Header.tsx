import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-2xl font-bold text-primary-800">
            <img
              src="/unitedacklogo.png"
              alt="United Acquisitions LLC Logo"
              className="h-16 w-auto object-contain"
            />
            <span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                 isActive 
                   ? 'px-4 py-2 bg-secondary-600 text-white rounded-md font-medium transition-all duration-200 hover:bg-secondary-700' 
                   : 'nav-link'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col py-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                   isActive 
                     ? 'px-4 py-2 bg-secondary-600 text-white rounded-md font-medium transition-all duration-200 hover:bg-secondary-700' 
                     : 'nav-link'
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;