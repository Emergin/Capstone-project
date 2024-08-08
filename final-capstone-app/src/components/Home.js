import React from 'react';
import './Home.css'; // Make sure to create a CSS file for Home styles
import ephantusImage from './ephantus.JPG'; // Adjust the import path according to your project structure

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/ephantus-nganga-621588231/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-icon"
            >
              <i className="uil uil-linkedin-alt home__icon"></i>
            </a>

            <a
              href="https://github.com/Emergin"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-icon"
            >
              <i className="uil uil-github-alt home__icon"></i>
            </a>
          </div>
          <div className="home__img">
            {/* SVG and Mask removed for brevity, use an <img> tag instead */}
            <img src={ephantusImage} alt="Ephantus" className="home__blob-img" />
          </div>
          <div className="home__data">
            <h1 className="home__title">Hi, I'm NG'ANG'A EPHANTUS</h1>
            <h3 className="home__subtitle">Information Technology Student</h3>
            <p className="home__description">
              A final-year student at <strong>Dedan Kimathi University of Technology</strong>, Nyeri.
            </p>
            <a href="#contact" className="button button--flex">
              Contact me<i className="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>

        {/* <div className="home__scroll"> */}
          {/* <a href="#about" className="home__scroll-button button--flex"> */}
            {/* <i className="uil uil-mouse-alt home__scroll-mouse"></i> */}
            {/* <span className="home__scroll-name">Scroll down</span> */}
            {/* <i className="uil uil-arrow-down home__scroll-arrow"></i> */}
          {/* </a> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Home;
