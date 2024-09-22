const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "ADP",
      duration: "July 2022 - Present",
      description:
        "I am currently employed at ADP, where I have accumulated 2 years of experience in front-end development. Additionally, I have gained exposure to SAP Basis administration as part of my role. I'm passionate about web development and continuously expanding my skills in both areas.",
      logo: "adp-exp-logo.webp",
    },
    {
      title: "Data Scientist Internship",
      company: "Xoriant Pvt Ltd",
      duration: "Feb 2022 - June 2022",
      description:
        "During my 4-month internship at Xoriant Pvt Ltd, I worked as a Data Scientist Engineer, focusing on NLP projects. My responsibilities included leveraging natural language processing techniques to analyze and derive insights from data.",
      logo: "xoriant-exp-logo.webp",
    },
    {
      title: "Project Coordinator Internship",
      company: "VISIX Translation Company",
      duration: "Nov 2021 - Mar 2022",
      description:
        "During an internship at VISIX Translation Company, I served as a Project Coordinator, managing teams from diverse international backgrounds for 6 months.",
      logo: "visix-exp-logo.webp",
    },
  ];

  return (
    <section
      className="section__container experience__container"
      id="experience"
    >
      <h2>EXPERIENCE</h2>
      <ul className="experience__list">
        {experiences.map((exp, index) => (
          <li key={index}>
            <div className="experience__header">
              <div>
                <img src={`/assets/${exp.logo}`} alt={exp.company} />
                <h4>{exp.title}</h4>
              </div>
            </div>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
