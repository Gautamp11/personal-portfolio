const Skills = () => {
  return (
    <section className="section__container skill__container">
      <h2>SKILLS</h2>
      <ul className="skill__flex">
        <li>
          <span>
            <i className="ri-javascript-fill"></i>
          </span>
          <h2>Javascript</h2>
        </li>
        <li>
          <span>
            <i className="ri-html5-fill"></i>
          </span>
          <h2>HTML/CSS</h2>
        </li>
        <li>
          <span>
            <i className="ri-reactjs-line"></i>
          </span>
          <h2>React</h2>
        </li>
        <li>
          <span>
            <i className="ri-nodejs-line"></i>
          </span>
          <h2>NodeJS</h2>
        </li>
        <li>
          <span>
            <i className="ri-database-2-line"></i>
          </span>
          <h2>MongoDB</h2>
        </li>
        <li>
          <span>
            <i className="ri-ubuntu-line"></i>
          </span>
          <h2>Linux</h2>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
