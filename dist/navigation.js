'use strict';

const logo = document.getElementById('logo');
const menu = document.getElementById("menuIcon");
const linkContainer = document.getElementById("linkContainer");
const navItems = document.querySelectorAll("#linkContainer > li > a")
const navbar = document.querySelector('nav')
const navbarHeight = navbar.offsetHeight

// Toggles Navbar On Mobile
menu.addEventListener("click", () => {
    linkContainer.classList.toggle("active");
});
// Function That Smooth Scrolls To A Section
const scroll = function(element) {
    const coordinates = document.querySelector(element.getAttribute("href")).getBoundingClientRect()
    window.scrollTo({
        left: coordinates.left + scrollX,
        top: coordinates.top + scrollY - navbarHeight,
        behavior: 'smooth',
    })
}
logo.addEventListener('click', function(e) {
    e.preventDefault()
    const anchor = e.target.closest('a')
    scroll(anchor)
})

// Event Delegation
navbar.addEventListener('click', function(e) {
    e.preventDefault()
    if (e.target.tagName === 'A') {
        scroll(e.target)
    }
});

