import { useState } from 'react';
import { assetUrl } from '../utils/asset'

interface TimelineItem {
  logo: string;
  alt: string;
  company: string;
  date: string;
  role: string;
  bullets: string[];
  actions?: { label: string; url: string }[];
}

const workItems: TimelineItem[] = [
  {
    logo: assetUrl('assets/company-icons/talos_trading_logo.jpeg'),
    alt: 'Talos Trading',
    company: 'Talos Trading',
    date: 'Starting Jun 2026',
    role: 'Software Engineer Intern (Connectivity Team)',
    bullets: [
      'Joining Talos Trading in June 2026 as a Software Engineer Intern on the Connectivity Team, working on trading infrastructure and connectivity systems.',
    ],
  },
  {
    logo: assetUrl('assets/company-icons/wargaming-logo.png'),
    alt: 'Wargaming',
    company: 'Wargaming',
    date: 'Jul 2025 – Jan 2026',
    role: 'Junior Engineer Intern',
    bullets: [
      'Improved production DDoS alerting reliability by migrating a Python service to a Kubernetes CronJob, generating context-rich alerts consumed by downstream Jira workflows and Teams notifications.',
      'Built and maintained a FastAPI + MySQL service analyzing 10k+ Jira incidents to identify missing automation diagnostics, reducing sprint planning and prioritization time by 75%.',
      'Designed self-service REST APIs for regex-based automation rule registration, replacing direct database edits and managing hundreds of rules, reducing manual operational effort by ~50%.',
    ],
  },
  {
    logo: assetUrl('assets/company-icons/cyens-logo.jpg'),
    alt: 'CYENS CoE',
    company: 'CYENS Centre of Excellence',
    date: 'Jun 2025 – Jul 2025',
    role: 'Software Engineering Intern',
    bullets: [
      'Built branching story flows for an AI storytelling platform, supporting manual input, AI regeneration, and LLM summarization with regex validation.',
      'Refactored backend from monolithic Streamlit scripts to modular architecture, improving scalability and testability.',
      'Upgraded story engine to use LangChain chains and custom prompts for better output control.',
      'Supported deployment, testing, and debugging for research study readiness.',
    ],
  },
  {
    logo: assetUrl('assets/company-icons/mtwebworks-logo.png'),
    alt: 'MT Webworks',
    company: 'MT Webworks',
    date: 'Jun 2024 – Present',
    role: 'Co-Founder & Web Developer',
    bullets: [
      'Co-founded MT Webworks, delivering and maintaining 5+ custom websites tailored to client needs.',
      'Increased client website traffic by 45% in 30 days — 1,107 sessions, 805 unique visitors.',
      'Enhanced client engagement metrics by 67%, achieving 35 contact clicks within a month.',
    ],
  },
];

const openSourceItems: TimelineItem[] = [
  {
    logo: assetUrl('assets/company-icons/meta.webp'),
    alt: 'Meta / pyrefly',
    company: 'Meta (facebook/pyrefly)',
    date: 'Jan 2026 – Present',
    role: 'Open Source Contributor',
    bullets: [
      'Fixed incorrect SelfType attribute lookup in the pyrefly type checker for classes inheriting from Any by implementing spec-aligned fallback logic and adding regression tests (merged PR #2271).',
    ],
    actions: [
      { label: 'view PR #2271', url: 'https://github.com/facebook/pyrefly/pull/2271' },
    ],
  },
  {
    logo: assetUrl('assets/company-icons/pydantic.jpeg'),
    alt: 'Pydantic',
    company: 'Pydantic',
    date: 'Jan 2026 – Present',
    role: 'Open Source Contributor',
    bullets: [
      'Improved ImportString error handling in Pydantic to prevent masked dependency failures; added regression tests and ensured full CI pass (merged PR #12740).',
    ],
    actions: [
      { label: 'view PR #12740', url: 'https://github.com/pydantic/pydantic/pull/12740' },
    ],
  },
];

const educationItems: TimelineItem[] = [
  {
    logo: assetUrl('assets/company-icons/UCY-logo-2.png'),
    alt: 'University of Cyprus',
    company: 'University of Cyprus',
    date: 'Expected Jun 2027',
    role: 'BSc Computer Science',
    bullets: [
      'Strong academic foundation in Java and C programming, OOP Principles, Data Structures and algorithmic problem solving.',
    ],
  },
  {
    logo: assetUrl('assets/company-icons/wargaming-logo.png'),
    alt: 'Wargaming',
    company: 'Wargaming',
    date: 'Mar 2025 – May 2025',
    role: 'Back-End Software Engineering Course',
    bullets: [
      'Completed Wargaming\'s competitive Back-End SWE course — OS, Networking, Linux, SQL/ORMs, FastAPI, CI/CD, DevOps, Kubernetes.',
      'Built an HTTP server and a round-robin message broker using FastAPI, SQLAlchemy, and GitLab CI.',
    ],
    actions: [
      { label: 'view certificate', url: 'https://drive.google.com/file/d/1Lbfo_j_kYpKlsFnH2SAmV_5uXg9EY78_/view?usp=sharing' },
    ],
  },
];

const Timeline = ({ items }: { items: TimelineItem[] }) => (
  <div className="timeline">
    {items.map(({ logo, alt, company, date, role, bullets, actions }) => (
      <div className="timeline-entry" key={company + date}>
        <div className="timeline-card">
          <div className="timeline-header">
            <div className="timeline-logo">
              <img src={logo} alt={alt} />
            </div>
            <div className="timeline-meta">
              <h3>{company}</h3>
              <p className="role">{role}</p>
            </div>
            <span className="timeline-date">{date}</span>
          </div>
          <ul className="timeline-bullets">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          {actions?.map(({ label, url }) => (
            <button
              key={label + url}
              className="certificate-btn"
              onClick={() => window.open(url, '_blank')}
            >
              {label} <i className="fas fa-arrow-right"></i>
            </button>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const Experience = () => {
  const [active, setActive] = useState<'work' | 'open-source' | 'education'>('work');

  return (
    <section id="experience">
      <p className="section-label">experience</p>
      <h2 className="section-title">Where I've Been</h2>

      <div className="tab-switcher">
        <button
          className={`tab ${active === 'work' ? 'active' : ''}`}
          onClick={() => setActive('work')}
        >
          work
        </button>
        <button
          className={`tab ${active === 'open-source' ? 'active' : ''}`}
          onClick={() => setActive('open-source')}
        >
          open source
        </button>
        <button
          className={`tab ${active === 'education' ? 'active' : ''}`}
          onClick={() => setActive('education')}
        >
          education
        </button>
      </div>

      <div className={`tab-content ${active === 'work' ? 'active' : ''}`}>
        <Timeline items={workItems} />
      </div>
      <div className={`tab-content ${active === 'open-source' ? 'active' : ''}`}>
        <Timeline items={openSourceItems} />
      </div>
      <div className={`tab-content ${active === 'education' ? 'active' : ''}`}>
        <Timeline items={educationItems} />
      </div>
    </section>
  );
};

export default Experience;