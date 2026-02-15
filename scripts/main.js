// Variables
const openButton = document.getElementById('open-sidebar-button');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('nav a');
const media = window.matchMedia("(width < 700px)");

const carousels = document.querySelectorAll('.cards-container');



// NAVBAR
media.addEventListener('change', (e) => updateNavbar(e));
updateNavbar(media);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});

// ACTIVE NAVBAR LINKS

// CAROUSELS / CARDS
carousels.forEach(container => {
    const track = container.querySelector('.carousel');
    const prevBtn = container.querySelector('.btn-carousel.prev');
    const nextBtn = container.querySelector('.btn-carousel.next');

    if (!track || !prevBtn || !nextBtn) return;

    const getScrollAmount = () => {
        const firstCard = track.querySelector('.card');
        if (!firstCard) return 0;
        const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
        return firstCard.offsetWidth + gap;
    };

    const updateButtonStates = () => {
        const isAtStart = track.scrollLeft <= 1;
        const isAtEnd = track.scrollLeft >= (track.scrollWidth - track.clientWidth - 1);

        prevBtn.disabled = isAtStart;
        nextBtn.disabled = isAtEnd;
    };

    nextBtn.addEventListener('click', () => {
        track.scrollBy(
            {
                left: getScrollAmount(),
                behavior: 'smooth',
            }
        );
    });

    prevBtn.addEventListener('click', () => {
        track.scrollBy(
            {
                left: -getScrollAmount(),
                behavior: 'smooth',
            }
        );
    });

    track.addEventListener('scroll', updateButtonStates);
    window.addEventListener('resize', updateButtonStates);

    updateButtonStates();
});



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