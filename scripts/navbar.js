// Variables
const openButton = document.getElementById('open-sidebar-button');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section, header');
const media = window.matchMedia("(width < 700px)");

// NAVBAR
media.addEventListener('change', (e) => updateNavbar(e));
updateNavbar(media);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (media.matches) closeSidebar();
    });
});

// ACTIVE NAVBAR LINKS
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Triggers when 50% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let currentId = entry.target.id;
            if (entry.target.tagName.toLowerCase() === 'header') {
                currentId = 'home';
            }

            navLinks.forEach(link => {
                link.classList.remove('active-link');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active-link');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// User Defined Functions
function openSidebar() {
    navbar.classList.add('show');
    navbar.removeAttribute('inert');
    openButton.setAttribute('aria-expanded', 'true');
}

function closeSidebar() {
    navbar.classList.remove('show');
    openButton.setAttribute('aria-expanded', 'false');
    if (media.matches) {
        navbar.setAttribute('inert', '');
    }
}

function updateNavbar(e) {
    if (e.matches) {
        navbar.setAttribute('inert', '');
        navbar.classList.remove('show');
    } else {
        navbar.removeAttribute('inert');
        navbar.classList.remove('show');
    }
}