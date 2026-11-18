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
    logo: assetUrl('assets/company-icons/talos_trading_logo.jpeg'),
    alt: 'Talos',
    company: 'Talos',
    date: 'Jun 2026 – Sep 2026',
    role: 'Software Engineer Intern',
    bullets: [
      'Built a reusable Go framework that automates trading gateway certification (connectivity, symbols, credentials, order execution); now runs across all 30+ gateways and is used by the team to build and debug them.',
      'Implemented 7 failure-scenario certifications, including hard-to-reproduce ones such as rate limits; in testing on about 10 gateways it found issues in 3, including a critical unhandled max-open-orders rejection that was masked as a generic error.',
      'Designed and documented an API for on-demand test execution with run deduplication, prioritization, cancellation, and status tracking.',
    ],
  },
  {
    logo: assetUrl('assets/company-icons/wargaming-logo.png'),
    alt: 'Wargaming',
    company: 'Wargaming',
    date: 'Jul 2025 – Jan 2026',
    role: 'Junior Engineer Intern',
    bullets: [
      'Migrated a production Python DDoS alerting service from a standalone while loop to a Kubernetes CronJob, and integrated context-rich alerts with Jira and Microsoft Teams.',
      'Built a FastAPI/MySQL dashboard used by the 8–10-engineer team to register alert-triggered automations (log recovery, commands in k8s pods, Jira context gathering), replacing a manual Confluence, SSH and hand-edited SQL workflow.',
      'Analyzed 10k+ Jira incidents to identify missing automation diagnostics, cutting sprint planning and prioritization time by 75%.',
    ],
  },
  {
    logo: assetUrl('assets/company-icons/cyens-logo.jpg'),
    alt: 'CYENS CoE',
    company: 'CYENS Centre of Excellence',
    date: 'Jun 2025 – Jul 2025',
    role: 'Software Engineer Intern',
    bullets: [
      'Built LangChain story-generation and summarization pipelines for an AI storytelling research platform, with branching story flows, AI regeneration and regex validation.',
      'Refactored the backend from monolithic Streamlit scripts into a modular architecture, improving scalability and testability.',
    ],
  },
];

const openSourceItems: TimelineItem[] = [
  {
    logo: assetUrl('assets/company-icons/pydantic.jpeg'),
    alt: 'Pydantic',
    company: 'Pydantic (29k+ GitHub stars)',
    date: 'Jan 2026',
    role: 'Open Source Contributor',
    bullets: [
      'Fixed ImportString error handling so underlying dependency failures surface instead of being masked; added regression tests and passed full CI (merged PR #12740).',
    ],
    actions: [
      { label: 'view PR #12740', url: 'https://github.com/pydantic/pydantic/pull/12740' },
    ],
  },
  {
    logo: assetUrl('assets/company-icons/meta.webp'),
    alt: 'Meta / pyrefly',
    company: 'Pyrefly (Meta\'s Python type checker, Rust)',
    date: 'Jan 2026',
    role: 'Open Source Contributor',
    bullets: [
      'Fixed SelfType attribute lookup for classes inheriting from Any by implementing spec-aligned fallback logic, with regression tests (merged PR #2271).',
    ],
    actions: [
      { label: 'view PR #2271', url: 'https://github.com/facebook/pyrefly/pull/2271' },
    ],
  },
];

const educationItems: TimelineItem[] = [
  {
    logo: assetUrl('assets/company-icons/UCY-logo-2.png'),
    alt: 'University of Cyprus',
    company: 'University of Cyprus',
    date: 'Expected Jun 2027',
    role: 'BSc Computer Science · GPA 8.08/10',
    bullets: [
      'Coursework: Algorithms, Data Structures, Operating Systems, Datacenter Computing, Databases, Networking.',
      'Bachelor\'s thesis (in progress): LLM routing across the edge continuum, a router that picks the (device, model) deployment per prompt, evaluated with quantized 0.8B/2B models on an NVIDIA Orin edge device.',
    ],
  },
  {
    logo: assetUrl('assets/company-icons/uah-logo.png'),
    alt: 'Universidad de Alcala de Henares',
    company: 'Universidad de Alcala de Henares',
    date: 'Jan 2026 – May 2026',
    role: 'Exchange Program (Erasmus+), Computer Science',
    bullets: [
      'Studied Security, Automated Planning, Software Quality, Testing & Maintenance, Embedded Systems and Project Management.',
    ],
  },
  {
    logo: assetUrl('assets/company-icons/wargaming-logo.png'),
    alt: 'Wargaming',
    company: 'Wargaming',
    date: 'Mar 2025 – May 2025',
    role: 'Back-End Software Engineering Course',
    bullets: [
      'Completed Wargaming\'s competitive Back-End SWE course: OS, Networking, Linux, SQL/ORMs, FastAPI, CI/CD, DevOps, Kubernetes.',
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
