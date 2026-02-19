// scripts/testimonials.js

const testimonialsData = [
    {
        name: "Mr Zohaib Hassan & Engr. Adil Badshah",
        role: "Tech leads @ FinTech Global",
        review: "Afnan doesn't just write code; he architects solutions. We hired him to refactor a legacy Django backend, and he not only optimized our query times by 40% but enforced a strict typing system that saved us months of debugging.",
        avatar: "images/88.webp"
    },
    {
        name: "David Clark",
        role: "Founder, Team Toshiba",
        review: "I needed a developer who understood self-hosting and didn't rely on expensive cloud wrappers. Afnan deployed our entire stack on a VPS with Coolify, saving us $200/mo in infrastructure costs. Rare talent.",
        avatar: "images/01.webp"
    },
    {
        name: "Michael Chen",
        role: "Senior Product Manager",
        review: "The 'ruthless mentor' description is accurate. He pushed back on our initial feature bloat, suggested a leaner MVP approach using Next.js, and delivered a PWA that feels native. Highly recommended for complex builds.",
        avatar: "images/03.webp"
    },
    {
        name: "Jessica Alverez",
        role: "Lead Engineer",
        review: "His grasp of data structures is refreshing. Most juniors just glue APIs together; Afnan actually understands the memory implications of his code. A true computer scientist in the making.",
        avatar: "images/05.webp"
    }
];

function renderTestimonials() {
    const carousel = document.querySelector("#testimonials .carousel");
    if (!carousel) return;

    testimonialsData.forEach(client => {
        const cardHTML = `
            <div class="card">
                <div class="card-quote">
                    " ${client.review} "
                </div>
                <div class="card-profile">
                    <div class="avatar">
                        <img src="${client.avatar}" alt="${client.name}" loading="lazy">
                    </div>
                    <div class="info">
                        <h5 class="name">${client.name}</h5>
                        <p class="role">${client.role}</p>
                    </div>
                </div>
            </div>
        `;
        carousel.insertAdjacentHTML('beforeend', cardHTML);
    });
}

renderTestimonials();