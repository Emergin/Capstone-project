import React from 'react';
import './Contact.css'; // Assume you have a CSS file for styling

const Contact = () => {
  return (
    <main>
      <section className="contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
          <div>
            <div className="contact__information">
              <i className="uil uil-calling contact__icon"></i>

              <div>
                <h3 className="contact__title">Contact Me</h3>
                <span className="contact__subtitle">
                  <a href="tel:+254748778756">+254748778756</a>
                </span>
              </div>
            </div>

            <div className="contact__information">
              <i className="uil uil-envelope-minus contact__icon"></i>

              <div>
                <h3 className="contact__title">Email</h3>
                <span className="contact__subtitle">ngangaephantus112@gmail.com</span>
              </div>
            </div>

            <div className="contact__information">
              <i className="uil uil-map-marker contact__icon"></i>

              <div>
                <h3 className="contact__title">Location</h3>
                <span className="contact__subtitle">NAIROBI, Kenya</span>
              </div>
            </div>
          </div>

          <form action="" className="contact__form grid">
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label className="content__label">Name</label>
                <input type="text" className="contact__input" />
              </div>

              <div className="contact__content">
                <label className="content__label">Email</label>
                <input type="email" className="contact__input" />
              </div>
            </div>

            <div className="contact__content">
              <label className="content__label">Message</label>
              <textarea cols="0" rows="7" className="contact__input"></textarea>
            </div>

            <div>
              <a href="mailto:NJOROGEwanjiru177@gmail.com?subject=Testing out mailto! &body=This is only a test!" className="button button--flex">
                Send Message
                <i className="uil uil-message button__icon"></i>
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
