window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const topButton = document.getElementById("top-btn");

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
        topButton.style.opacity = "1";
    } else {
        topButton.style.opacity = "0";
        setTimeout(() => {
            if (document.body.scrollTop <= 300 && document.documentElement.scrollTop <= 300) {
                topButton.style.display = "none";
            }
        }, 300);
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add("active");
}

function showProject(projectId) {
    const projectDetails = document.querySelectorAll('.project-detail');
    const projectButtons = document.querySelectorAll('.project-btn');
  
    // Hide all project details and remove active class from buttons
    projectDetails.forEach(detail => detail.classList.remove('active'));
    projectButtons.forEach(btn => btn.classList.remove('active'));
  
    // Show the selected project detail and add active class to the clicked button
    document.getElementById(projectId).classList.add('active');
    document.querySelector(`.project-btn[onclick="showProject('${projectId}')"]`).classList.add('active');
}

function switchTab(event, tabId) {
    // Remove active class from all menu items
    const menuItems = document.getElementsByClassName('project-menu-item');
    for (let item of menuItems) {
        item.classList.remove('active');
    }

    // Add active class to clicked menu item
    event.currentTarget.classList.add('active');

    // Hide all tab panes
    const tabPanes = document.getElementsByClassName('tab-pane');
    for (let pane of tabPanes) {
        pane.classList.remove('active');
    }

    // Show selected tab pane
    document.getElementById(tabId).classList.add('active');
}

// Project Modal Functions
function openProjectDetails(projectId) {
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  
  // Get project content based on ID
  const content = getProjectContent(projectId);
  modalContent.innerHTML = content;
  
  // Show modal with animation
  modal.style.display = 'block';
  // Force reflow
  modal.offsetHeight;
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';

  // Animate tech tags
  setTimeout(() => {
    const techTags = modal.querySelectorAll('.tech-tag');
    techTags.forEach((tag, index) => {
      tag.style.animation = `fadeInUp 0.3s ease forwards ${index * 0.1}s`;
    });
  }, 300);
}

function getProjectContent(projectId) {
  const projects = {
    studai: `
      <h3>🧠 stud(ai)</h3>
      <h5>Under development...</h5>
      <p>Currently developing Streamlit-based interactive study assistant powered by LangChain and LLMs. 
        It helps students transform their study notes into flashcards, quizzes, and summaries — all from 
        uploaded PDFs or DOCX files.</p>
      <br>
      <p>Key features include:</p>
      <ul>
        <li><strong>Notes upload:</strong> Upload .pdf or .docx study files.</li>
        <li><strong>Automatic chunking and embedding of document content</strong></li>
        <li><strong>Flashcard Generator:</strong> Log outfits as worn on specific dates or plan for future events, ensuring you never repeat an outfit unintentionally.</li>
        <li><strong>Quiz Mode:</strong> Receive personalized outfit recommendations tailored to occasions, local dress codes, weather conditions, and more.</li>
        <li><strong>Ask Me Anything:</strong> Utilize Firebase Storage to store images for clothing pieces.</li>
        <li><strong>Summarize Notes: </strong></li>
        </ul>
      <p>
        <a href="https://github.com/tsembp/AI-Study-Mate" target="_blank" style="color: #FFC107; text-decoration: none;">View GitHub Repository</a>
      </p>
      <div class="tech-stack">
        <span class="tech-tag">Streamlit</span>
        <span class="tech-tag">LangChain</span>
        <span class="tech-tag">OpenAI & HugginFace Hub LLMs</span>
      </div>
    `,
    wgDiscordBot: `
      <h3>🤖 Wargaming Course - New Task Notifier Discord Bot</h3>
      <h5>April 2025</h5>
      <p>A Discord bot that scrapes Wargaming's Backend SWE Course platform for new tasks and 
        immediately notifies users in our Discord server. The idea came to me after constantly having 
        to check for updates manually—I wanted a solution that would help not just me, but also the 50 
        other course participants stay on top of new assignments effortlessly. Currently, the bot runs 
        locally, and I'm planning to deploy it soon for 24/7 automated monitoring.</p>
      <br>
      <p>Key features include:</p>
      <ul>
        <li><strong>Automated Monitoring:</strong> Checks for new course tasks every 10 minutes using Selenium web automation.</li>
        <li><strong>Real-Time Notifications:</strong> Posts instant alerts in a designated Discord channel when new tasks are detected.</li>
        <li><strong>Task Tracking:</strong> Maintains a record of previously seen tasks to prevent duplicate notifications.</li>
        <li><strong>Command Interface:</strong> Enables users to retrieve current tasks or check for updates on demand using simple commands.</li>
      </ul>
      <p>
        <a href="https://github.com/tsembp/WG-Course-Task-Notifier-Bot" target="_blank" style="color: #FFC107; text-decoration: none;">View GitHub Repository</a>
      </p>
      <div class="tech-stack">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">Selenium Web Scraping</span>
      </div>
    `,
    jobApplicationTracker: `
      <h3>💼 Job Application Tracker</h3>
      <h5>January 2025</h5>
      <p>A full-stack web application designed to help manage and track job applications 
        efficiently. The idea came to me during my internship hunt, as I struggled to stay 
        organized with the companies I had applied to and the key details for each opportunity.</p>
      <br>
      <p>Key features include:</p>
      <ul>
        <li><strong>CRUD Operations:</strong> Create, update, and delete job application entries effortlessly.</li>
        <li><strong>Advanced Filtering:</strong> Filter applications by status, job type, location, or search for specific keywords/phrases.</li>
        <li><strong>Data Security:</strong> MySQL integration ensures safe and secure storage of job application records.</li>
        <li><strong>Export Functionality:</strong> Export job applications in CSV format for offline access.</li>
        <li><strong>Data Insights:</strong> Visualize your progress with charts and numerical statistics to gain insights into your applications.</li>
      </ul>
      <p>
        <a href="https://github.com/tsembp/Job-Application-Tracker" target="_blank" style="color: #FFC107; text-decoration: none;">View GitHub Repository</a>
        <a href="https://www.youtube.com/watch?v=RFmE6xdIeuE" target="_blank" style="color: #FFC107; text-decoration: none; margin-left: 20px;">Watch Demo</a>
      </p>
      <div class="tech-stack">
        <span class="tech-tag">Java</span>
        <span class="tech-tag">Spring Boot</span>
        <span class="tech-tag">JavaScript</span>
        <span class="tech-tag">HTML</span>
        <span class="tech-tag">CSS</span>
        <span class="tech-tag">MySQL</span>
      </div>
    `,
    studentGradingSystem: `
      <h3>🧑‍🎓 Student Grading System</h3>
      <h5>December 2024 - January 2025</h5>
      <p>A comprehensive application designed to streamline the management of student, teacher and courses 
        records and student grades.</p>
      <br>
      <p>Key features include:</p>
      <ul>
        <li><strong>Role-based Authentication:</strong> Secure login for Admin, Teacher, and Student users with specific access permissions.</li>
        <li><strong>Admin Features:</strong> Manage student and teacher records, create courses, and assign courses to teachers and students.</li>
        <li><strong>Teacher Features:</strong> View and grade students enrolled in their courses.</li>
        <li><strong>Student Features:</strong> View grades and course information.</li>
        <li><strong>Course Management:</strong> Create, update, and delete course records.</li>
        <li><strong>Grade Management:</strong> Input and update student grades for specific courses.</li>
        <li><strong>Data Security:</strong> Ensure secure storage and access to student and course data.</li>
      </ul>
      <p>
        <a href="https://github.com/tsembp/Student-Grading-System" target="_blank" style="color: #FFC107; text-decoration: none;">View GitHub Repository</a>
        <a href="https://www.youtube.com/watch?v=YKvESa6d8vU" target="_blank" style="color: #FFC107; text-decoration: none; margin-left: 20px;">Watch Demo</a>
      </p>
      <div class="tech-stack">
        <span class="tech-tag">Java</span>
        <span class="tech-tag">CSS</span>
        <span class="tech-tag">MySQL</span>
      </div>
    `,
    triviaQuizApp: `
      <h3>🎯 Trivia Quiz App</h3>
      <h5>January 2025</h5>
      <p>A Trivia Quiz App built using HTML, CSS, and JavaScript, allowing users to select a quiz category 
        and test their knowledge with multiple-choice questions fetched from the Open Trivia Database API.</p>
      <br>
      <p>Key features include:</p>
      <ul>
        <li><strong>Quiz Category Selection:</strong> Select a quiz category from a dropdown to fetch questions about.</li>
        <li><strong>Quiz Length:</strong> Select number of questions to be generated.</li>
        <li><strong>Feedback:</strong> Highlight correct and wrong answers.</li>
        <li><strong>Score calculation:</strong> Total correct questions answered calculation.</li>
        <li><strong>Edge case handling:</strong> Error handling such as preventing multiple selections after answering.</li>
      </ul>
      <p>
        <a href="https://github.com/tsembp/JS-Projects/tree/main/Quiz%20App" target="_blank" style="color: #FFC107; text-decoration: none;">View GitHub Repository</a>
      </p>
      <div class="tech-stack">
        <span class="tech-tag">JavaScript</span>
        <span class="tech-tag">APIs</span>
        <span class="tech-tag">HTML</span>
        <span class="tech-tag">CSS</span>
      </div>
    `,
    others: `
      <h3>💻 Other Projects</h3>
      <h5>Collections of other projects</h5>
      <p>Additional knowledge-enhancement projects include:</p>
      <ul>
        <li><strong>📰 AI News Feed:</strong> A project that includes a web-scraper that fetches news from sites like BBC, passes them into Gemini.</li>
        <li><strong>🧑‍🍳 Recipe Finder:</strong> A Recipe Finder Web App built using HTML, CSS, and JavaScript. It allows users to search for recipes by name and fetches results from the Spoonacular API.</li>
        <li><strong>🔐 Strong password generator:</strong> A simple Python-based desktop app that generates strong passwords of desired length.</li>
        <li><strong>🔍 Search Engine Implementation using TrieTree:</strong> As part of the EPL231 - Data Structures & Algorithms course, me and my duo partner developed a simplified search engine using TrieNode Data Structure in Java.</li>
        <li><strong>🧩 Automated Latin Square Game:</strong> As part of the EPL232 - Programming Techniques & Tools course, I developed an automated Latin Square solver program using Java.</li>
        <li><strong>🧪 Chemical Formula Processor:</strong> A program that takes as input chemical formulas and breaks them down to individual chemical elements. Done as part of the EPL232 course.</li>
      </ul>
      <p>Each one showcases different aspects of problem-solving, algorithms, and application development.</p>
      <p>
        <a href="https://github.com/tsembp" target="_blank" style="color: #FFC107; text-decoration: none;">View GitHub Profile</a>
      </p>
    `
  };

  return projects[projectId] || '<p>Project details not found.</p>';
}

// Close modal when clicking the close button or outside the modal
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.querySelector('.close-modal');

  function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 300);
  }

  closeBtn.onclick = closeModal;

  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  }

  // Add escape key support
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });

  // Prevent scrolling when modal is open
  modal.addEventListener('wheel', function(event) {
    if (event.target === modal) {
      event.preventDefault();
    }
  });
});

// Add this at the end of your CSS file
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);