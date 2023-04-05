/**NAVIGATION */
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links > a");

window.addEventListener(
  "scroll",
  () => {
    let scrollPosition = window.scrollY + 50;

    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        links.forEach((link) => {
          link.classList.remove("active");
          if (section.getAttribute("id") === link.getAttribute("href").substring(1)) {
            link.classList.add("active");
          }
        });
      }
    });
    const navbar = document.getElementById("navigation");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add("navigation-on-scroll");
    } else {
      navbar.classList.remove("navigation-on-scroll");
    }
    const linksDesktop = document.querySelectorAll(".nav-links-desktop > a");
    let scrollPositions = window.scrollY + 50;

    sections.forEach((section) => {
      if (scrollPositions >= section.offsetTop) {
        linksDesktop.forEach((link) => {
          link.classList.remove("activeDesktop");
          if (section.getAttribute("id") === link.getAttribute("href").substring(1)) {
            link.classList.add("activeDesktop");
          }
        });
      }
    });
  },
  { passive: true }
);

const hamburgerBtn = document.querySelector(".mobile-nav");
const mobilNavigation = document.querySelector(".hidden");
hamburgerBtn.addEventListener("click", () => {
  mobilNavigation.classList.toggle("nav-content");
});
const closeBtn = document.getElementById("close-nav");
closeBtn.addEventListener("click", () => {
  mobilNavigation.classList.remove("nav-content");
});

const navLinks = document.querySelectorAll(".nav-links > a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobilNavigation.classList.remove("nav-content");
  });
});
window.onload = function () {
  const loader = document.querySelector("#loader");
  loader.style.display = "none";
};
