import { useState, useEffect } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 dark:bg-white/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          {/* Logo */}
          <a
            href="/"
            className="font-[cursive] text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white-500 to-blue-500 
                       hover:from-yellow-500 hover:to-black-500 transition-all duration-500 ease-in-out transform hover:scale-110 
                       tracking-wide drop-shadow-md italic"
          >
            Suraj
          </a>

          {/* Toggle Button for Menu */}
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          {/* Toggle Button for Light/Dark Mode */}
          <button
            onClick={toggleTheme}
            className="text-neutral-400 hover:text-white focus:outline-none sm:flex hidden"
            aria-label="Toggle theme">
            {isDarkMode ? (
              <span className="text-2xl">🌞</span> // Sun emoji for Light mode
            ) : (
              <span className="text-2xl">🌙</span> // Moon emoji for Dark mode
            )}
          </button>

          {/* Desktop Navigation Links */}
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div className={`nav-sidebar transition-all ease-in-out duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
