// VARIABLES
const projectsData = [
    {
        title: "Synapse Analytics",
        description: "Predictive data modeling and visualization dashboard.",
        role: "Data Scientist & Engineer",
        problem: "Processed gigabytes of unstructured business data through a custom pipeline, training predictive models to forecast operational bottlenecks and user retention.",
        techStack: ["Python", "Scikit-Learn", "Pandas", "PostgreSQL", "FastAPI"],
        links: { project: "#", code: "#" },
        imgSrc: "images/projects/01.webp"
    },
    {
        title: "CoreClip",
        description: "AI-powered video and shorts generator platform.",
        role: "Fullstack Developer",
        problem: "Automating short-form video content creation pipelines utilizing AI models & strictly typed architectures.",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
        links: { project: "#", code: "#" },
        imgSrc: "images/projects/00.webp"
    },
    {
        title: "Taskus",
        description: "Modern, high performance web app for to-dos and notes",
        role: "Frontend Engineer",
        problem: "Engineered a persistent Progressive Web App leveraging complex browser storage APIs to eliminate the need for costly backend infrastructure.",
        techStack: ["HTML", "CSS", "JavaScript", "Local Storage", "PWA"],
        links: { project: "#", code: "#" },
        imgSrc: "images/projects/01.webp"
    },
    {
        title: "DevHuddle",
        description: "Comprehensive developer collaboration environment.",
        role: "Backend architecture",
        problem: "Refactored rigid template systems and implemented robust asynchronous notification delivery mechanisms.",
        techStack: ["Django", "Python", "PostgreSQL", "HTML", "CSS", "Tailwind CSS"],
        links: { project: "#", code: "#" },
        imgSrc: "images/projects/00.webp"
    },
    {
        title: "Willayer",
        description: "Advanced video processing and content generation utility.",
        role: "Architect & Developer",
        problem: "Building a unified sovereign platform capable of cross-platform video downloading & seamless AI content manipulation.",
        techStack: ["TypeScript", "APIs", "HTML/CSS", "Tailwind CSS", "MongoDB", "Data Science"],
        links: { project: "#", code: "#" },
        imgSrc: "images/projects/01.webp"
    },
    {
        title: "Apex-fd Portfolio",
        description: "Professional niche specific portfolio website for a software engineer",
        role: "Frontend Developer",
        problem: "From Figma design, developing a pixel perfect hand coded personal branding portfolio website.",
        techStack: ["HTML", "CSS", "JavaScript", "GitHub"],
        links: { project: "#", code: "#" },
        imgSrc: "images/projects/00.webp"
    }
]

// FUNCTION DEFINITIONS
function renderProjects() {
    const projectCarousel = document.querySelector("#projects .carousel");
    if (!projectCarousel) return;

    projectsData.forEach(project => {
        const techTags = project.techStack.map(tech => `<span class="tag">${tech}</span>`).join('');
        const cardHTML = `
        <div class="card">
            <div class="card-img">
                <img src="${project.imgSrc}" alt="${project.title} Interface" loading="lazy">
            </div>
            <div class="card-header">
                <p class="title">${project.title}</p>
                <p class="description">${project.description}</p>
            </div>
            <div class="card-intro">
                <p class="role">${project.role}</p>
                <p class="prob">${project.problem}</p>
            </div>
            <div class="card-tech">
                ${techTags}
            </div>
            <div class="card-links">
                <a href="${project.links.project}" class="btn-primary">Visit Project</a>
                <a href="${project.links.code}" class="btn-secondary">View Code</a>
            </div>
        </div>
        `;

        projectCarousel.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// EXECUTION
renderProjects();