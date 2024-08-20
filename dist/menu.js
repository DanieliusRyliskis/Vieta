const hamburgerMenu = document.getElementById("menuIcon");
const links = document.getElementById("links");

hamburgerMenu.addEventListener("click", () => {
  links.classList.toggle("active");
});
