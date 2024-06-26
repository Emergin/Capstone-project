import React, { useState } from 'react';
import './Qualification.css';

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [showModal, setShowModal] = useState(false);

  // Function to change the active tab
  const changeTab = (tabName) => {
    setActiveTab(tabName);
    setShowModal(false); // Close any open modals when changing tabs
  };

  // Function to toggle the modal view
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="qualification__section service__section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container grid services__container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''}`}
            onClick={() => changeTab('education')}
          >
            <i className="uil uil-graduation-cap qualification__icon1"></i>Education
          </div>
          <div
            className={`qualification__button button--flex ${activeTab === 'experience' ? 'qualification__active' : ''}`}
            onClick={() => changeTab('experience')}
          >
            <i className="uil uil-briefcase-alt qualification__icon2"></i>Professional Experience
          </div>
        </div>

        {activeTab === 'education' && (
          <div className="qualification__content qualification__active" id="education">
            <ul> <b>High School</b>
                <li>1.Subjects studied: Maths, English, Physics, Chemistry, Geography, Kiswahili, History, Business Studies.</li>
                <li>2.Scored B</li>
                <li>3.Was the peer counsellor in our class.</li>
                <li>4.Was a member of the Presidential club.</li>
            </ul>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Science Degree</h3>
                <span className="qualification__subtitle">Dedan Kimathi University of Technology - 2018</span>
                <div className="qualification__calender"><i className="uil uil-calendar-alt"></i> 2014 - 2018</div>
                <button className="button button--flex button--small button--link services__button" onClick={toggleModal}>
                  View More <i className="uil uil-arrow-right button__icon"></i>
                </button>
              </div>
            </div>
            {showModal && (
              <div className="services__modal active">
                <div className="services__modal-content">
                  <h4 className="services__modal-title">Degree Details</h4>
                  <i className="uil uil-times services__modal-close" onClick={toggleModal}></i>
                  {/* Modal content here */}
                  
                  <ul>
                  <p>Undergraduate Degree Summary:</p>
                    <p>
                    In first year the main units studied were: 
                    Introduction to programming in C, Calculus, 
                    Object Oriented Programming in C++, 
                    and Probability and Statistics.
                    </p>
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="qualification__content" id="experience">
            {/* Content for Professional Experience here */}
            <p>Undergraduate Degree Summary:</p>
            <ul>
            <p>
                    In first year the main units studied were: 
                    Introduction to programming in C, Calculus, 
                    Object Oriented Programming in C++, 
                    and Probability and Statistics.
                    </p>
            </ul>
            <div className="qualification__data">
              {/* Experience details */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Qualification;
