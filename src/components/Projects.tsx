import { useState, useEffect, useCallback } from 'react';

type ProjectId = 'studai' | 'wgDiscordBot' | 'jobApplicationTracker' | 'studentGradingSystem' | 'triviaQuizApp' | 'others';

interface ProjectData {
  title: string;
  date: string;
  description: string;
  bullets: { label: string; text: string }[];
  links: { label: string; url: string }[];
  tags: string[];
}

const projectsData: Record<ProjectId, ProjectData> = {
  studai: {
    title: '🧠 stud(ai)',
    date: 'under development',
    description: 'A Streamlit-based interactive study assistant powered by LangChain and LLMs. Transforms study notes into flashcards, quizzes, and summaries from uploaded PDFs or DOCX files.',
    bullets: [
      { label: 'Notes upload', text: 'Upload .pdf or .docx study files.' },
      { label: 'Auto chunking & embedding', text: 'Processes and embeds document content.' },
      { label: 'Flashcard Generator', text: 'Auto-generates flashcards from notes.' },
      { label: 'Quiz Mode', text: 'Test yourself with auto-generated quizzes.' },
      { label: 'Ask Me Anything', text: 'Chat with your notes via LLM.' },
      { label: 'Summarize Notes', text: 'Get concise summaries of uploaded content.' },
    ],
    links: [{ label: 'github', url: 'https://github.com/tsembp/AI-Study-Mate' }],
    tags: ['Streamlit', 'LangChain', 'OpenAI', 'HuggingFace'],
  },
  wgDiscordBot: {
    title: '🤖 WG Task Notifier Bot',
    date: 'April 2025',
    description: 'A Discord bot that scrapes Wargaming\'s Backend SWE Course platform for new tasks and notifies 50+ course participants in real time. Automated what was previously a manual checking process.',
    bullets: [
      { label: 'Automated Monitoring', text: 'Checks for new tasks every 10 minutes via Selenium.' },
      { label: 'Real-Time Notifications', text: 'Posts instant alerts to a designated Discord channel.' },
      { label: 'Task Tracking', text: 'Maintains seen tasks to prevent duplicate notifications.' },
      { label: 'Command Interface', text: 'Retrieve tasks or trigger checks on demand.' },
    ],
    links: [{ label: 'github', url: 'https://github.com/tsembp/WG-Course-Task-Notifier-Bot' }],
    tags: ['Python', 'Selenium', 'Discord.py'],
  },
  jobApplicationTracker: {
    title: '💼 Job Application Tracker',
    date: 'January 2025',
    description: 'A full-stack web app built to manage and track job applications efficiently — born from my own internship hunt frustration.',
    bullets: [
      { label: 'CRUD Operations', text: 'Create, update, and delete entries effortlessly.' },
      { label: 'Advanced Filtering', text: 'Filter by status, type, location, or keyword.' },
      { label: 'Data Security', text: 'MySQL ensures safe, structured storage.' },
      { label: 'CSV Export', text: 'Export applications for offline access.' },
      { label: 'Data Insights', text: 'Charts and stats to visualize your progress.' },
    ],
    links: [
      { label: 'github', url: 'https://github.com/tsembp/Job-Application-Tracker' },
      { label: 'demo', url: 'https://www.youtube.com/watch?v=RFmE6xdIeuE' },
    ],
    tags: ['Java', 'Spring Boot', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
  },
  studentGradingSystem: {
    title: '🧑‍🎓 Student Grading System',
    date: 'Dec 2024 – Jan 2025',
    description: 'A comprehensive application to streamline the management of student, teacher, and course records with role-based access.',
    bullets: [
      { label: 'Role-based Auth', text: 'Secure login for Admin, Teacher, and Student.' },
      { label: 'Admin Features', text: 'Manage records, create courses, assign teachers/students.' },
      { label: 'Teacher Features', text: 'View and grade enrolled students.' },
      { label: 'Student Features', text: 'View grades and course information.' },
      { label: 'Grade Management', text: 'Input and update grades per course.' },
    ],
    links: [
      { label: 'github', url: 'https://github.com/tsembp/Student-Grading-System' },
      { label: 'demo', url: 'https://www.youtube.com/watch?v=YKvESa6d8vU' },
    ],
    tags: ['Java', 'CSS', 'MySQL'],
  },
  triviaQuizApp: {
    title: '🎯 Trivia Quiz App',
    date: 'January 2025',
    description: 'A Trivia Quiz App built with HTML, CSS, and JavaScript — fetches questions from the Open Trivia Database API by category.',
    bullets: [
      { label: 'Category Selection', text: 'Choose a quiz category from a dropdown.' },
      { label: 'Quiz Length', text: 'Configure number of questions.' },
      { label: 'Instant Feedback', text: 'Highlights correct and wrong answers.' },
      { label: 'Score Tracking', text: 'Calculates and displays total correct answers.' },
      { label: 'Edge Cases', text: 'Prevents multiple selections after answering.' },
    ],
    links: [{ label: 'github', url: 'https://github.com/tsembp/JS-Projects/tree/main/Quiz%20App' }],
    tags: ['JavaScript', 'REST API', 'HTML', 'CSS'],
  },
  others: {
    title: '💻 Other Projects',
    date: 'various',
    description: 'A collection of smaller projects spanning AI, algorithms, and web development.',
    bullets: [
      { label: 'AI News Feed', text: 'Web scraper that fetches BBC news and passes them to Gemini.' },
      { label: 'Recipe Finder', text: 'Web app using Spoonacular API to search for recipes.' },
      { label: 'Password Generator', text: 'Python desktop app for generating strong passwords.' },
      { label: 'Search Engine (TrieTree)', text: 'Simplified search engine using TrieNode in Java.' },
      { label: 'Latin Square Solver', text: 'Automated Latin Square solver in Java.' },
      { label: 'Chemical Formula Processor', text: 'Breaks down chemical formulas into elements.' },
    ],
    links: [{ label: 'github profile', url: 'https://github.com/tsembp' }],
    tags: [],
  },
};

const projectCards = [
  { id: 'studai' as ProjectId, image: '/assets/projects-preview/studai.png', title: 'AI Study Mate — stud(ai)', subtitle: 'under development' },
  { id: 'wgDiscordBot' as ProjectId, image: '/assets/projects-preview/wgdiscordbot.png', title: 'WG Task Notifier Bot', subtitle: 'April 2025' },
  { id: 'jobApplicationTracker' as ProjectId, image: '/assets/projects-preview/jobapplicationtracker.png', title: 'Job Application Tracker', subtitle: 'January 2025' },
  { id: 'studentGradingSystem' as ProjectId, image: '/assets/projects-preview/studentgradingsystem.png', title: 'Student Grading System', subtitle: 'Dec 2024 – Jan 2025' },
  { id: 'triviaQuizApp' as ProjectId, image: '/assets/projects-preview/quizapp.png', title: 'Trivia Quiz App', subtitle: 'January 2025' },
  { id: 'others' as ProjectId, image: '/assets/projects-preview/newsfeed.png', title: 'Other Projects', subtitle: 'various' },
];

const Projects = () => {
  const [modalProject, setModalProject] = useState<ProjectId | null>(null);

  const closeModal = useCallback(() => setModalProject(null), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = modalProject ? 'hidden' : 'auto';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = 'auto';
    };
  }, [modalProject, closeModal]);

  const project = modalProject ? projectsData[modalProject] : null;

  return (
    <section id="projects">
      <div className="inner">
        <p className="section-label">projects</p>
        <h2 className="section-title">Things I've Built</h2>

        <div className="projects-grid">
          {projectCards.map(({ id, image, title, subtitle }) => (
            <div className="project-card" key={id} onClick={() => setModalProject(id)}>
              <div className="project-card-image">
                <img src={image} alt={title} />
                <div className="project-overlay">
                  <i className="fas fa-eye"></i>
                  <span>view_project()</span>
                </div>
              </div>
              <div className="project-card-content">
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalProject && project && (
        <div
          className="modal show"
          style={{ display: 'block' }}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <h3>{project.title}</h3>
            <h5>// {project.date}</h5>
            <p>{project.description}</p>
            <ul>
              {project.bullets.map(({ label, text }, i) => (
                <li key={i}><strong>{label}:</strong> {text}</li>
              ))}
            </ul>
            <p>
              {project.links.map(({ label, url }, i) => (
                <a key={i} href={url} target="_blank" rel="noreferrer">{label} ↗</a>
              ))}
            </p>
            {project.tags.length > 0 && (
              <div className="tech-stack">
                {project.tags.map(tag => (
                  <span className="tech-tag" key={tag}>{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;