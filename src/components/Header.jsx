const Header = () => {
  return (
    <header className="section__container header__container" id="header">
      <img src="/assets/avatar.png" alt="header" />
      <h1>
        I'm Gautam
        <br />
        Learning and Growing <span>Software Developer</span>
      </h1>
      <p>
        I specialize in HTML, CSS, JavaScript, React, and Node.js, with 2 years
        of experience at ADP, where I gained valuable insights into front-end
        development alongside SAP Basis administration. I'm currently expanding
        my skills into full-stack development.
      </p>
      <div className="header__btns">
        <button
          className="btn"
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
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
