import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';
import { assetUrl } from '../utils/asset'

interface TimelineItem {
  logo: string;
  alt: string;
  company: string;
  companyUrl?: string;
  date: string;
  role: string;
  bullets: string[];
  actions?: { label: string; url: string; minimal?: boolean }[];
}

const workItems: TimelineItem[] = [
  {
    logo: assetUrl('assets/company-icons/pozare-logo.png'),
    alt: 'pozare',
    company: 'pozare',
    companyUrl: 'https://pozare.app',
    date: 'Sep 2026 – Present',
    role: 'Software Engineer',
    bullets: [
      'Co-building the full-stack platform, from user-facing workflows to backend services.',
    ],
  },
  {
    logo: assetUrl('assets/company-icons/talos_trading_logo.jpeg'),
    alt: 'Talos Trading',
    company: 'Talos Trading',
    date: 'Jun 2026 – Sep 2026',
    role: 'Software Engineer Intern',
    bullets: [
      'Designed and implemented a reusable Go-based Gateway Certification Framework to automate conformance testing of trading gateways.',
      'Built 7 certifications based on known gateway failure scenarios, helping identify real issues and improve reliability.',
      'Designed and documented a full API that supports on-demand test execution, run deduplication, prioritization, cancellation, and status tracking, making gateway testing significantly more efficient and accessible.',
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
    logo: assetUrl('assets/company-icons/uah-logo.png'),
    alt: 'Universidad de Alcala de Henares',
    company: 'Universidad de Alcala de Henares',
    date: 'Jan 2026 – May 2026',
    role: 'Exchange Program (Erasmus+), Computer Science',
    bullets: [
      'Currently enrolled in Security, Automated Planning, Software Quality, Testing & Maintenance, Embedded Systems and Project Management.',
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

const Timeline = ({ items }: { items: TimelineItem[] }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setExpandedItems((current) => {
      const next = new Set(current);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div className="timeline">
      {items.map(({ logo, alt, company, companyUrl, date, role, bullets, actions }) => {
        const itemKey = company + date;
        const canExpand = bullets.length > 1;
        const isExpanded = expandedItems.has(itemKey);
        const visibleBullets = canExpand && !isExpanded ? bullets.slice(0, 1) : bullets;

        return (
          <div className="timeline-entry" key={itemKey}>
        <div className="timeline-card">
          <div className="timeline-header">
            <div className="timeline-logo">
              <img src={logo} alt={alt} />
            </div>
            <div className="timeline-meta">
              <h3>
                {companyUrl ? (
                  <a
                    className="timeline-company-link"
                    href={companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${company} (opens in a new tab)`}
                  >
                    {company} <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                ) : company}
              </h3>
              <p className="role">{role}</p>
            </div>
            <span className="timeline-date">{date}</span>
          </div>
          <ul className="timeline-bullets">
            {visibleBullets.map((b, i) => (
              <li key={i}>
                {b}
                {canExpand && !isExpanded && i === 0 && (
                  <button
                    type="button"
                    className="timeline-expand-inline"
                    aria-expanded="false"
                    onClick={() => toggleItem(itemKey)}
                  >
                    ... see more <FaChevronDown aria-hidden="true" />
                  </button>
                )}
              </li>
            ))}
          </ul>
          {canExpand && isExpanded && (
            <button
              type="button"
              className="timeline-collapse-link"
              aria-expanded="true"
            onClick={() => toggleItem(itemKey)}
          >
              show less <FaChevronUp aria-hidden="true" />
            </button>
          )}
          {actions?.length && (
            <div className="timeline-card-footer">
              <div className="timeline-actions">
                {actions?.map(({ label, url, minimal }) => (
                  <a
                    key={label + url}
                    className={minimal ? 'timeline-link' : 'certificate-btn'}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {label} {minimal ? <FaExternalLinkAlt aria-hidden="true" /> : <i className="fas fa-arrow-right"></i>}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
        );
      })}
    </div>
  );
};

const Experience = () => {
  const [active, setActive] = useState<'work' | 'open-source' | 'education'>('work');
  const activeItems = active === 'work' ? workItems : active === 'open-source' ? openSourceItems : educationItems;

  return (
    <section id="experience">
      <p className="section-label">experience</p>
      <h2 className="section-title">Where I've Been</h2>

      <div className={`tab-switcher active-${active}`}>
        <span className="tab-indicator" aria-hidden="true"></span>
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

      <div className="tab-content active" key={active}>
        <Timeline items={activeItems} />
      </div>
    </section>
  );
};

export default Experience;
