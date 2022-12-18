const burgerMenu = document.getElementById("burger-menu");
const closeMenu = document.getElementById("close-menu");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

burgerMenu.addEventListener("click", () => {
  nav.classList = "show-nav";
  burgerMenu.classList = "hide-burger-menu";
  closeMenu.classList = "show-close-menu";
  overlay.classList = "show-overlay";
});

closeMenu.addEventListener("click", () => {
  closeMenu.classList = "close-menu";
  burgerMenu.classList = "burger-menu";
  nav.classList.remove("show-nav");
  overlay.classList = "hide-overlay";
});
