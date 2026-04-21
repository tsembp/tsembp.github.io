import type { IconType } from 'react-icons';
import {
  FaBolt,
  FaChartLine,
  FaCode,
  FaCube,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaJira,
  FaLayerGroup,
  FaLeaf,
  FaLink,
  FaLinux,
  FaPython,
  FaServer,
} from 'react-icons/fa';

const skillGroups = [
  {
    label: 'languages',
    items: ['Python', 'Java', 'SQL', 'C++'],
  },
  {
    label: 'frameworks',
    items: ['FastAPI', 'Spring Boot', 'SQLAlchemy', 'LangChain'],
  },
  {
    label: 'databases',
    items: ['PostgreSQL', 'MySQL', 'SQL Server'],
  },
  {
    label: 'tools',
    items: ['Linux', 'Git', 'Docker', 'Kubernetes', 'Grafana', 'Jira'],
  },
];

const skillIcons: Record<string, IconType> = {
  Python: FaPython,
  Java: FaJava,
  SQL: FaDatabase,
  'C++': FaCode,
  FastAPI: FaBolt,
  'Spring Boot': FaLeaf,
  SQLAlchemy: FaLayerGroup,
  LangChain: FaLink,
  PostgreSQL: FaDatabase,
  MySQL: FaDatabase,
  'SQL Server': FaServer,
  Linux: FaLinux,
  Git: FaGitAlt,
  Docker: FaDocker,
  Kubernetes: FaCube,
  Grafana: FaChartLine,
  Jira: FaJira,
};

const skillIconColors: Record<string, string> = {
  Python: '#3776AB',
  Java: '#E76F00',
  SQL: '#4DB6AC',
  'C++': '#5C6BC0',
  FastAPI: '#009688',
  'Spring Boot': '#6DB33F',
  SQLAlchemy: '#D32F2F',
  LangChain: '#F9A825',
  PostgreSQL: '#336791',
  MySQL: '#00758F',
  'SQL Server': '#CC2927',
  Linux: '#FCC624',
  Git: '#F05033',
  Docker: '#2496ED',
  Kubernetes: '#326CE5',
  Grafana: '#F46800',
  Jira: '#2684FF',
};

const About = () => {
  return (
    <section id="about">
      <p className="section-label">about</p>
      <h2 className="section-title">Who I Am</h2>

      <div className="about-grid">
        <div className="about-bio">
          <h3>// background</h3>
          <ul className="about-list">
            <li>3rd Year CS student with a strong interest in Software Engineering, Trading and AI.</li>
            <li>Incoming SWE Intern at Talos Trading for Summer 2026.</li>
            <li>
              Won 3rd place at the Bank of Cyprus Hackathon 6.0 with my team TestoBugs for building an energy trading solution that lets photovoltaic owners sell surplus electricity at competitive rates.
              {' '}
              <span className="achievement-sources" aria-label="Hackathon sources">
                <a
                  className="source-icon-btn"
                  href="https://medium.com/the-crowdpolicy-collection-en/boc-fintech-hackathon-6-0-empowering-innovation-in-the-new-era-of-fintech-7d398987713a"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Read article on Medium"
                  title="Read article on Medium"
                >
                  <i className="fas fa-newspaper" aria-hidden="true"></i>
                </a>
                <a
                  className="source-icon-btn"
                  href="https://cyprus-mail.com/2025/10/22/boc-hackathon-attracts-over-100-participants-in-31-teams"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Read article on Cyprus Mail"
                  title="Read article on Cyprus Mail"
                >
                  <i className="fas fa-newspaper" aria-hidden="true"></i>
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div className="skills-block">
          {skillGroups.map(({ label, items }) => (
            <div className="skills-category" key={label}>
              <p className="skills-category-label">{label}</p>
              <div className="skills-tags">
                {items.map((item) => {
                  const SkillIcon = skillIcons[item] ?? FaCode;

                  return (
                    <span className="skill-tag" key={item}>
                      <SkillIcon
                        className="skill-tag-icon"
                        aria-hidden="true"
                        style={{ color: skillIconColors[item] ?? 'var(--accent)' }}
                      />
                      <span>{item}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;