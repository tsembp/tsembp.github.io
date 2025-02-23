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