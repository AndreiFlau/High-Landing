document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-mobile");
  const links = navLinks.querySelectorAll("a");
  const checkBox = document.getElementById("check");

  // Toggle menu visibility
  hamburger.addEventListener("click", () => {
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !isExpanded);
  });

  // Close menu when a link is clicked
  links.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.setAttribute("aria-expanded", "false");
      checkBox.checked = false;
    });
  });
});
