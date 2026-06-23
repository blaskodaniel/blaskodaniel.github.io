const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Close the mobile menu after clicking a nav link
navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

// Scroll spy + sticky header
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  sections.forEach((sec) => {
    const offset = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const active = document.querySelector(`.navbar a[href="#${id}"]`);
      if (active) active.classList.add("active");
    }
  });

  header.classList.toggle("sticky", scrollY > 40);
});

// Footer year
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
