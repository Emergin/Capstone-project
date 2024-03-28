import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
// Ensure you've installed Font Awesome for React to use the icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">EPHANTUS</h1>
            <span className="footer__subtitle">Information Technology Student</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#qualification" className="footer__link">Qualification</a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="footer__link">Contact-Me</a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.instagram.com/112_trubel/"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} /> {/* Icon from Font Awesome */}
            </a>
          </div>
        </div>

        <p className="footer__copy">&#169; NGANGA. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
