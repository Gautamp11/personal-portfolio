const Projects = () => {
  const projects = [
    {
      title: "Time Hop",
      image: "project-timehop.png",
      skills: ["NextJS", "tailwind", "Supabase"],
      gitLink: "https://github.com/Gautamp11/timehop",
      liveLink: "https://timehop.vercel.app/",
    },
    {
      title: "Smart Finance Observer",
      image: "project-smart-finance.png",
      skills: ["NextJS", "tailwind", "Supabase"],
      gitLink: "https://github.com/Gautamp11/smart-finance",
      liveLink: "https://smart-finance-theta.vercel.app/",
    },
    {
      title: "Skill Share Board",
      image: "project-skillShareBoard.png",
      skills: ["React", "tailwind", "Supabase"],
      gitLink: "https://github.com/Gautamp11/skillShareBoard",
      liveLink: "https://skill-share-board.vercel.app/",
    },
    {
      title: "The Wild Oasis Hotel Management App",
      image: "project-the-wild-oasis.png",
      skills: ["React", "React Query", "Supabase"],
      link: "https://github.com/Gautamp11/the-wild-oasis",
      liveLink: "https://the-wild-oasis-gautamp1.vercel.app/",
    },
    {
      title: "The Wild Oasis Website",
      image: "project-the-wild-oasis-website.png",
      skills: ["NextJS", "Tailwind", "Supabase"],
      gitLink: "https://github.com/Gautamp11/the-wild-oasis-website",
      liveLink: "https://the-wild-oasis-website-gautamp1.vercel.app/",
    },
    {
      title: "Today I Learned",
      image: "project-today-i-learned.png",
      skills: ["React", "Supabase"],
      gitLink: "https://github.com/Gautamp11/today-i-learned",
      liveLink: "https://today-i-learned-sooty.vercel.app/",
    },
    {
      title: "Chit Chat",
      image: "project-chit-chat.png",
      skills: ["React", "Supabase", "Tailwind"],
      gitLink: "https://github.com/Gautamp11/chit-chat",
      liveLink: "",
    },
    {
      title: "Habit Tracker",
      image: "project-habit-tracker.png",
      skills: ["React", "tailwind", "Redux"],
      link: "https://github.com/Gautamp11/habit-tracker",
      liveLink: "https://habit-tracker-gautamp1.vercel.app/",
    },
    {
      title: "React Quiz App",
      image: "project-react-quiz.png",
      skills: ["React", "CSS", "JSX"],
      gitLink: "https://github.com/Gautamp11/rock-paper-scissors-game",
      liveLink: "https://react-quiz-gautamp1.vercel.app/",
    },
    {
      title: "Travel List",
      image: "project-react-travel-list.png",
      skills: ["React", "CSS", "JSX"],
      gitLink: "https://github.com/Gautamp11/rock-paper-scissors-game",
      liveLink: "",
    },
    {
      title: "Fast React Pizza App",
      image: "project-react-pizza-app.jpg",
      skills: ["React", "Tailwind", "Redux"],
      gitLink: "https://github.com/Gautamp11/fast-react-pizza",
      liveLink: "",
    },
    {
      title: "Weather App",
      image: "project-weather-app.jpeg",
      skills: ["HTML", "CSS", "JS"],
      gitLink: "https://github.com/Gautamp11/weather-app",
      liveLink: "https://weather-app-gautamp1.netlify.app/",
    },
    {
      title: "50 Mini Projects",
      image: "project-50-mini.jpeg",
      skills: ["HTML", "CSS", "JS"],
      gitLink: "https://github.com/Gautamp11/50-projects-in-50-days",
    },
  ];

  return (
    <section className="section__container project__container" id="project">
      <h2>PROJECTS</h2>
      <div className="project__grid">
        {projects.map((project, index) => (
          <div
            className="project__card"
            key={index}
            data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`} // AOS animation
            data-aos-delay={index * 50}
          >
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
              <div
                style={{ display: "flex", gap: "1px", alignItems: "center" }}
              >
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Github Link"
                >
                  <i className="ri-code-line"></i>
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Link"
                  >
                    <i className="ri-global-line"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        <div
          className="project__card"
          data-aos="fade-left"
          data-aos-delay={700}
        >
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
