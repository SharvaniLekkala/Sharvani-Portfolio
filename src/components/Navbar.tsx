import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '#about' },
  { name: 'Projects', to: '#projects' },
  { name: 'Skills', to: '#skills' },
  { name: 'Leadership', to: '#leadership' },
  { name: 'Achievements', to: '#achievements' },
  { name: 'Contact', to: '#contact' },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll for hash links on the home page
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (hash.startsWith('#')) {
      if (location.pathname !== '/') {
        // On non-home pages, navigate to home with hash and close menu
        e.preventDefault();
        setMobileMenuOpen(false);
        window.location.href = `${import.meta.env.BASE_URL}${hash}`;
        return;
      }
      e.preventDefault();
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'h-16 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800'
          : 'h-20 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-accent font-display tracking-tight hover:text-accent-light transition-colors">
          SL.
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.to.startsWith('#') ? (
                  <a
                    href={`/${link.to}`}
                    onClick={(e) => handleNavClick(e, link.to)}
                    className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 py-4 px-4 shadow-lg">
          <ul className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.to.startsWith('#') ? (
                  <a
                    href={`/${link.to}`}
                    onClick={(e) => handleNavClick(e, link.to)}
                    className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-accent dark:hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-accent dark:hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
