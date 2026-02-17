// Variables
const openButton = document.getElementById('open-sidebar-button');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('nav a');
const media = window.matchMedia("(width < 700px)");

// NAVBAR
media.addEventListener('change', (e) => updateNavbar(e));
updateNavbar(media);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});

// ACTIVE NAVBAR LINKS


// User Defined Functions
function openSidebar() {
    navbar.classList.add('show');
    navbar.removeAttribute('inert');
    openButton.setAttribute('aria-expanded', 'true');
}

function closeSidebar() {
    navbar.classList.remove('show');
    navbar.setAttribute('inert', '');
    openButton.setAttribute('aria-expanded', 'false');
}

function updateNavbar(e) {
    const isMobile = e.matches;
    if (isMobile) {
        navbar.setAttribute('inert', '');
    } else {
        navbar.removeAttribute('inert');
    }
}