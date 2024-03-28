import React, { useState } from 'react';
import './NavigationBar.css'; // Ensure CSS is correctly set up for styling

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme', !isDarkTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const selectLink = (linkName) => {
    setActiveLink(linkName);
    setIsMenuOpen(false); // Automatically close the menu on link selection
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">NG'ANG'A EPHANTUS</a>
        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className={`nav__link ${activeLink === 'home' ? 'active-link' : ''}`} onClick={() => selectLink('home')}>
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className={`nav__link ${activeLink === 'about' ? 'active-link' : ''}`} onClick={() => selectLink('about')}>
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className={`nav__link ${activeLink === 'skills' ? 'active-link' : ''}`} onClick={() => selectLink('skills')}>
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className={`nav__link ${activeLink === 'qualification' ? 'active-link' : ''}`} onClick={() => selectLink('qualification')}>
                <i className="uil uil-briefcase-alt nav__icon"></i>Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className={`nav__link ${activeLink === 'portfolio' ? 'active-link' : ''}`} onClick={() => selectLink('portfolio')}>
                <i className="uil uil-scenery nav__icon"></i>Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className={`nav__link ${activeLink === 'contact' ? 'active-link' : ''}`} onClick={() => selectLink('contact')}>
                <i className="uil uil-message nav__icon"></i>Contact Me
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={toggleMenu}></i>
        </div>
        <div className="nav__btns">
          <i className={`uil ${isDarkTheme ? 'uil-sun' : 'uil-moon'} change-theme`} onClick={toggleTheme}></i>
          <div className="nav__toggle" onClick={toggleMenu}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
