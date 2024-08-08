import React from 'react';
import './About.css'; // Ensure you have an About.css file for styling
import ephantusImage from './ephantus.JPG'; // Adjust the import path as necessary

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={ephantusImage} alt="Ephantus" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            I am a final-year IT undergraduate with a deep passion for technology, my journey has been
            driven by curiosity and a relentless pursuit of knowledge. My adventures have led me to specialize in front-end web development,
            where I blend creativity with functionality to craft engaging user experiences. In this dynamic field, I thrive on challenges and constant learning.
            As I embark on my professional journey, I'm looking for a competitive role that allows me to further hone my skills and contribute meaningfully to a
            forward-thinking organization. With an eager heart and a mindset geared towards innovation, I am ready to make a lasting impact in the tech world.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">08.50+</span>
              <span className="about__info-name">Aggregate <br />CGPA</span>
            </div>

            <div>
              <span className="about__info-title">3+</span>
              <span className="about__info-name">Frontend <br />Projects</span>
            </div>

            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">Months <br />experience</span>
            </div>
          </div>

          <div className="about__buttons">
            <a download href="/Ephantus.CV.pdf" className="button button--flex">
              Download CV<i className="fas fa-download button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
