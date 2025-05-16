import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';
import NavLinks from './NavLinks';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#1a237e] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="hidden md:flex space-x-4 text-xs">
            <a href="tel:+918858891579" className="hover:underline">
              Helpline: +91 8858891579
            </a>
            <a href="mailto:ladityal149@gmail.com" className="hover:underline">
              Email: contect
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="https://bteup.ac.in/Eseva/Outerpages/StudentAdminLogin.aspx" className="flex items-center text-xs hover:underline">
              <User size={14} className="mr-1" />
              Student Login
            </Link>
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-[#283593] text-white text-xs rounded-full py-1 px-3 w-40 focus:outline-none focus:ring-1 focus:ring-white" 
              />
              <Search size={14} className="absolute right-2 top-1.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className={`bg-white ${isScrolled ? 'shadow-md' : ''} transition-all duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <Logo />
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <NavLinks />
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute w-full z-50 overflow-auto max-h-[80vh]">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLinks isMobile />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;