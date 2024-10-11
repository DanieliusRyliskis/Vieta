'use strict';

const logo = document.getElementById('logo');
const logoFooter = document.getElementById('logoFooter');
const callToAction = document.getElementById('callToAction');
const menu = document.getElementById("menuIcon");
const linkContainer = document.getElementById("linkContainer");
const navbar = document.querySelector('nav');
const navbarHeight = navbar.offsetHeight;
const browse = document.getElementById("browse");


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
// Event Delegation
navbar.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.id !== 'languageToggle') {
        e.preventDefault()
        scroll(e.target)
    }
});
browse.addEventListener('click', function(e) {
    if (e.target.tagName === 'A'){
        e.preventDefault()
        scroll(e.target)
    }
});
// Call To Action (Depends)
callToAction.addEventListener('click', function(e) {
    e.preventDefault()
    scroll(e.target)
})

// Logo
logo.addEventListener('click', function(e) {
    e.preventDefault()
    const anchor = e.target.closest('a')
    scroll(anchor)
})
// Footer Logo
logoFooter.addEventListener('click', function(e) {
    e.preventDefault()
    const anchor = e.target.closest('a')
    scroll(anchor)
})

