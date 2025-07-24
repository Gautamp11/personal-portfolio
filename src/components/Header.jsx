const Header = () => {
  return (
    <header
      className="section__container header__container"
      id="header"
      data-aos="fade-up"
    >
      <div className="header__content">
        <div className="header__image-container">
          <img
            src="/assets/avatar.png"
            alt="Gautam Kumar"
            className="header__avatar"
          />
          <div className="header__avatar-border"></div>
        </div>

        <div className="header__text">
          <h1>
            Gautam Kumar
            <span className="header__title">Software Developer</span>
          </h1>

          <div className="highlights-section">
            <div className="highlights-item">
              <h2>Experience</h2>
              <p>
                <span>3+</span> years
              </p>
            </div>
            <div className="highlights-item">
              <h2>Projects</h2>
              <p>
                <span>10+</span> completed
              </p>
            </div>
            <div className="highlights-item">
              <h2>DSA</h2>
              <p>
                <span>100+</span> solved
              </p>
            </div>
          </div>

          <div className="header__btns">
            <button
              className="btn btn__primary"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/gautam-kumar-abb14b192/",
                  "_blank"
                )
              }
            >
              Get in Touch
            </button>
            <a
              href="https://drive.google.com/drive/folders/1RoqgxvPqTIOsapDUSUtv-FFyE4blcJaT"
              download
              target="_blank"
              className="btn btn__secondary"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
