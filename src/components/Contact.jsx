const Contact = () => {
  return (
    <footer>
      <div className="section__container footer__container" id="contact">
        <h2>Contact</h2>
        <p>
          I'd love to hear from you! Whether you have a project in mind, a
          question about my work, or just want to connect, feel free to reach
          out. You can contact me via email or through my social media channels.
          I am always excited to collaborate with like-minded individuals and
          explore new opportunities.
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
