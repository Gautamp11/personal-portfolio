const Contact = () => {
  return (
    <footer>
      <div
        className="section__container footer__container"
        id="contact"
        data-aos="fade-up"
      >
        <h2>Contact</h2>
        <p>
          I’d love to hear from you! Got a project, a question, or just want to
          connect? Drop me an email or reach out on social media—I’m always up
          for great conversations and new opportunities!
        </p>
        <div className="mail__to">
          <a href="#">
            <span>
              <i className="ri-mail-line"></i>
            </span>
            gautam1564p1@gmail.com
          </a>
        </div>
        <ul className="footer__socials">
          <li>
            <a
              href="https://github.com/Gautamp11?tab=repositories"
              target="_blank"
            >
              <i className="ri-github-line"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/gautamp1/" target="_blank">
              <i className="ri-instagram-fill"></i>
            </a>
          </li>
          <li>
            <a href="https://x.com/gautam1133p1" target="_blank">
              <i className="ri-twitter-x-fill"></i>
            </a>
          </li>
          <li>
            <a
              href="www.linkedin.com/in/gautam-kumar-abb14b192"
              target="_blank"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
