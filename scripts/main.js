// VARIABLES
const carousels = document.querySelectorAll('.cards-container');

// FUNCTIONS DEFINITIONS


// EXECUTIONS
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