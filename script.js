function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
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