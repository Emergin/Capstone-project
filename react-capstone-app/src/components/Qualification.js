import React, { useState } from 'react';
import './Qualification.css';

const qualifications = [
  {
    id: "education",
    title: "Kenya Certificate of Secondary School Education",
    subtitle: "MUHOHO BOY'S High School - High School",
    year: "2020",
    details: [
      "Subjects studied: Maths, English, Physics, Chemistry, Geography, Kiswahili, History, Business Studies.",
      "Scored B",
      "Was the peer counsellor in our class.",
      "Was a member of the Presidential club."
    ]
  },
  // Include other qualifications here...
];

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="qualification__section service__section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container grid services__container">
        <div className="qualification__tabs">
          {/* Tab switching functionality simplified for demonstration */}
          <div className="qualification__button button--flex qualification__active" onClick={() => setActiveTab("education")}>
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>
        </div>

        <div className="qualification__sections">
          {/* Conditional rendering based on activeTab */}
          {qualifications.filter(q => q.id === activeTab).map((qualification, index) => (
            <div key={index} className="qualification__content qualification__active services__content" data-content id={qualification.id}>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">{qualification.title}</h3>
                  <span className="qualification__subtitle">{qualification.subtitle}</span>
                  <div className="qualification__calendar"><i className="uil uil-calendar-alt"></i> - {qualification.year}</div>
                  <button className="button button--flex button--small button--link services__button" onClick={() => setShowModal(true)}>
                    View More <i className="uil uil-arrow-right button__icon"></i>
                  </button>
                  {/* Modal content conditionally rendered */}
                  {showModal && (
                    <div className="services__modal">
                      <div className="services__modal-content">
                        <h4 className="services__modal-title">{qualification.title}</h4>
                        <i className="uil uil-times services__modal-close" onClick={() => setShowModal(false)}></i>
                        <ul className="services__modal-services grid">
                          {qualification.details.map((detail, index) => (
                            <li key={index} className="services__modal-service">
                              <i className="uil uil-check-circle services__modal-icon"></i>
                              <p>{detail}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
