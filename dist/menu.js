const hamburgerMenu = document.getElementById("hamburgerMenu");
const links = document.getElementById("links");

hamburgerMenu.addEventListener("click", () => {
  links.classList.toggle("active");
});
