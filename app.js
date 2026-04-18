const hamburgerMenu = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-menu-container");

hamburgerMenu.addEventListener("click", () => {
  navList.classList.toggle("open");
});
