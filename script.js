function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  const isOpen = menu.classList.contains("open");
  icon.setAttribute("aria-expanded", isOpen);
}
