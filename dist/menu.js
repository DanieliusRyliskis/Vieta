const menu = document.getElementById("hamburger");
const links = document.getElementById("links");

menu.addEventListener("click", () => {
  console.log(links);
  links.classList.toggle("active");
});
