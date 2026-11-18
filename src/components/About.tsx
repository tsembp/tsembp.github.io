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
  FaProjectDiagram,
  FaRobot,
  FaCheckCircle,
  FaCodeBranch,
  FaPython,
  FaServer,
  FaSyncAlt
} from 'react-icons/fa';
import { SiGo } from 'react-icons/si';

const skillGroups = [
  {
    label: 'languages',
    items: ['Go', 'Python', 'Java', 'SQL', 'TypeScript'],
  },
  {
    label: 'frameworks',
    items: ['FastAPI', 'Next.js', 'Spring Boot', 'SQLAlchemy', 'LangChain'],
  },
  {
    label: 'databases',
    items: ['PostgreSQL', 'MySQL', 'SQL Server'],
  },
  {
    label: 'tools',
    items: ['Linux', 'Git', 'Docker', 'Kubernetes', 'Grafana', 'Prometheus', 'Jira', 'CI/CD Pipelines'],
  },
  {
    label: 'ai tooling',
    items: ['Claude Code', 'Codex', 'LLM Pipelines'],
  },
  {
    label: 'practices',
    items: ['Distributed Systems', 'Code Review', 'Testing'],
  },
];

const skillIcons: Record<string, IconType> = {
  Python: FaPython,
  Go: SiGo,
  Java: FaJava,
  SQL: FaDatabase,
  TypeScript: FaCode,
  'Next.js': FaCode,
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
  Prometheus: FaChartLine,
  Jira: FaJira,
  'CI/CD Pipelines': FaSyncAlt,
  'Claude Code': FaRobot,
  Codex: FaRobot,
  'LLM Pipelines': FaLink,
  'Distributed Systems': FaProjectDiagram,
  'Code Review': FaCodeBranch,
  Testing: FaCheckCircle,
};

const skillIconColors: Record<string, string> = {
  Python: '#3776AB',
  Java: '#E76F00',
  SQL: '#4DB6AC',
  TypeScript: '#3178C6',
  'Next.js': '#9aa7b2',
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
  Prometheus: '#E6522C',
  Jira: '#2684FF',
};

const About = () => {
  return (
    <section id="about">
      <p className="section-label">about</p>
      <h2 className="section-title">Who I Am</h2>

      <div className="about-grid">
        <div className="about-bio">
          <ul className="about-list">
            <li>Final-year Computer Science student (GPA 8.08/10) focused on backend, distributed systems and reliable infrastructure software.</li>
            <li>Co-founder of Stekki, a multi-tenant loyalty platform with Apple/Google Wallet passes, built in Go, PostgreSQL and Next.js.</li>
            <li>Open to graduate and internship roles worldwide, especially in trading, fintech and payments infrastructure; EU citizen, open to relocation.</li>
            <li>Merged contributions to Pydantic (29k+ stars) and Meta&apos;s Pyrefly type checker.</li>
            <li>
              Won 3rd place at the Bank of Cyprus Hackathon 6.0 with my team TestoBugs.
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
