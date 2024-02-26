const nav = document.getElementById("nav"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navLink = document.getElementsByClassName("nav__link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    nav.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    nav.classList.remove("show-menu");
  });
}

if (navLink) {
  Array.from(navLink).forEach((e) => {
    e.addEventListener("click", () => {
      nav.classList.remove("show-menu");
    });
  });
}
