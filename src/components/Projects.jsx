const Projects = () => {
  const projects = [
    {
      title: "The Wild Oasis Hotel Management App",
      image: "project-the-wild-oasis.png",
      skills: ["React", "React Query", "Supabase"],
      link: "https://github.com/Gautamp11/the-wild-oasis",
    },
    {
      title: "Today I Learned",
      image: "project-today-i-learned.png",
      skills: ["React", "Supabase"],
      link: "https://github.com/Gautamp11/today-i-learned",
    },
    {
      title: "React Quiz App",
      image: "project-react-quiz.png",
      skills: ["React", "CSS", "JSX"],
      link: "https://github.com/Gautamp11/rock-paper-scissors-game",
    },
    {
      title: "Travel List",
      image: "project-react-travel-list.png",
      skills: ["React", "CSS", "JSX"],
      link: "https://github.com/Gautamp11/rock-paper-scissors-game",
    },
    {
      title: "Fast React Pizza App",
      image: "project-react-pizza-app.jpg",
      skills: ["React", "Tailwind", "Redux"],
      link: "https://github.com/Gautamp11/fast-react-pizza",
    },
    {
      title: "50 Mini Projects",
      image: "project-50-mini.jpeg",
      skills: ["HTML", "CSS", "JS"],
      link: "https://github.com/Gautamp11/50-projects-in-50-days",
    },
    {
      title: "Weather App",
      image: "project-weather-app.jpeg",
      skills: ["HTML", "CSS", "JS"],
      link: "https://github.com/Gautamp11/weather-app",
    },
  ];

  return (
    <section className="section__container project__container" id="project">
      <h2>PROJECTS</h2>
      <div className="project__grid">
        {projects.map((project, index) => (
          <div className="project__card" key={index}>
            <div className="project__image__container">
              <img src={`/assets/${project.image}`} alt="project" />
            </div>
            <div className="project__card__details">
              <div>
                <h4>{project.title}</h4>
                <div className="project-skills">
                  {project.skills.map((skill, i) => (
                    <span key={i}>{skill}</span>
                  ))}
                </div>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </div>
        ))}
        <div className="project__card">
          <div className="project__image__container">
            <img src="/assets/project-more.jpeg" alt="More Projects" />
          </div>
          <div className="project__card__details">
            <div>
              <h4>More Projects..</h4>
              <div className="project-skills">
                <span>Explore on my GitHub</span>
              </div>
            </div>
            <a
              href="https://github.com/Gautamp11?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-arrow-right-up-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
