import React, { useState } from 'react';
import './Skills.css'; // Make sure to create a CSS file for styling

const skillCategories = [
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: 'fas fa-pencil-ruler',
    skills: [
      { name: 'C', level: '90%' },
      { name: 'Java', level: '80%' },
      { name: 'Python', level: '55%' }
    ],
  },
  {
    id: 'itConstructs',
    title: 'IT Constructs',
    icon: 'fas fa-code',
    skills: [
      { name: 'DS & Algorithms', level: '80%' },
      { name: 'OOP', level: '70%' },
      { name: 'OS', level: '85%' },
      { name: 'DBMS', level: '80%' }
    ],
  },
  {
    id: 'technologies',
    title: 'Technologies',
    icon: 'fas fa-swatchbook',
    skills: [
      { name: 'HTML', level: '95%' },
      { name: 'CSS', level: '95%' },
      { name: 'JavaScript', level: '60%' }
    ],
  }
];

const Skills = () => {
  const [openSkill, setOpenSkill] = useState(null);

  const toggleSkill = (id) => {
    setOpenSkill(openSkill === id ? null : id);
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        {skillCategories.map(category => (
          <div key={category.id} className={`skills__content ${openSkill === category.id ? 'skills__open' : ''}`}>
            <div className="skills__header" onClick={() => toggleSkill(category.id)}>
              <i className={category.icon + " skills__icon"}></i>
              <h1 className="skills__title">{category.title}</h1>
              <i className="uil uil-angle-down skills__arrow"></i>
            </div>

            {openSkill === category.id && (
              <div className="skills__list grid">
                {category.skills.map((skill, index) => (
                  <div className="skills__data" key={index}>
                    <div className="skills__titles">
                      <h3 className="skills__name">{skill.name}</h3>
                      <span className="skills__number">{skill.level}</span>
                    </div>
                    <div className="skills__bar" style={{width: skill.level}}>
                      <span className={`skills__percentage skills__${skill.name.toLowerCase()}`}></span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
