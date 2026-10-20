/* ===== 1. MOBILE NAVIGATION ===== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("open");


  const isOpen = navLinks.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});



/* ===== 2. DARK / LIGHT THEME ===== */

const themeToggle = document.getElementById("theme-toggle");


themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");


  const isLight = document.body.classList.contains("light-theme");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
});



/* ===== 3. PROJECT DETAILS POPUP ===== */

const projectDetails = document.querySelectorAll(".project-details");
const projectModal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTech = document.getElementById("modal-tech");
const modalLink = document.getElementById("modal-link");


const projects = {
  zick360: {
    title: "Zick360 Student Portal",
    description: "A student portal project designed to provide a central place for student-related information and activities.",
    tech: "Technologies: React, JavaScript, HTML, CSS",
    link: "https://github.com/isaacalagi27-zic"
  },


   "mint-aura": {
    title: "Mint Aura",
    description: "A cleaning service website project designed to present services and help customers explore cleaning options.",
    tech: "Technologies: HTML, CSS, JavaScript",
    link: "https://github.com/isaacalagi27-zic"
  },


  "zick-quiz": {
    title: "Zick Quiz Game",
    description: "An interactive quiz game where users can answer questions and test their knowledge.",
    tech: "Technologies: HTML, CSS, JavaScript",
    link: "https://github.com/isaacalagi27-zic"
  }
};

// Open the correct project popup
projectDetails.forEach(function (button) {
  button.addEventListener("click", function () {
    const project = projects[button.dataset.project];

    if (!project) return;
 
     modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalTech.textContent = project.tech;
    modalLink.href = project.link;

 projectModal.style.display = "flex";
    projectModal.setAttribute("aria-hidden", "false");
  });
});


// Close the popup using the × button
modalClose.addEventListener("click", function () {
  projectModal.style.display = "none";
  projectModal.setAttribute("aria-hidden", "true");
});


// Close the popup by clicking outside its content
projectModal.addEventListener("click", function (event) {
  if (event.target === projectModal) {
    projectModal.style.display = "none";
    projectModal.setAttribute("aria-hidden", "true");
  }
});


// Close the popup with the Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    projectModal.style.display = "none";
    projectModal.setAttribute("aria-hidden", "true");
  }
});


/* ===== 4. AUTOMATIC COPYRIGHT YEAR ===== */

const currentYear = document.getElementById("current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}