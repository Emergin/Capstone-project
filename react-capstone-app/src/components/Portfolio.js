import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Portfolio.css'; // Make sure to create a corresponding CSS file

import foodAppImg from './food.gif';
import movieAppImg from './movie.gif';
import libraryAppImg from './library.gif';
import quotesAppImg from './quotes.gif';

const projects = [
  {
    img: foodAppImg,
    title: "React Food App",
    description: "This project is a react food app that allows customers to buy and the items are put in a cart where by the store will view the orders.",
    repoUrl: "https://github.com/Emergin/React-projects",
    cloneUrl: "https://github.com/Emergin/React-projects.git",
  },
  {
    img: movieAppImg,
    title: "Movie app",
    description: "Allows you to record all the movies and series that you have watched over time. Helps to keep track of all the movies you haven't watched yet.",
    repoUrl: "https://github.com/Emergin/React-projects",
    cloneUrl: "https://github.com/Emergin/React-projects.git",
  },
  {
    img: libraryAppImg,
    title: "React Food App",
    description: "This project is a react food app that allows customers to buy and the items are put in a cart where by the store will view the orders.",
    repoUrl: "https://github.com/Emergin/React-projects",
    cloneUrl: "https://github.com/Emergin/React-projects.git",
  },
  {
    img: quotesAppImg,
    title: "React Food App",
    description: "This project is a react food app that allows customers to buy and the items are put in a cart where by the store will view the orders.",
    repoUrl: "https://github.com/Emergin/React-projects",
    cloneUrl: "https://github.com/Emergin/React-projects.git",
  }
  // Add other projects here...
];

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="portfolio__container container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: false }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="portfolio__content grid">
              <img src={project.img} alt={project.title} className="portfolio__img" />
              <div className="portfolio__data">
                <h3 className="portfolio__title">{project.title}</h3>
                <p className="portfolio__description">{project.description}</p>
                <a href={project.repoUrl} className="button button--flex button--small portfolio__button">
                  GitHub Repository<i className="uil uil-external-link-alt button__icon"></i>
                </a>
                <a href={project.cloneUrl} className="button button--flex button--small portfolio__button">
                  Clone repository<i className="uil uil-external-link-alt button__icon"></i>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
