const carousel = document.querySelector("#services .carousel");

const servicesData = [
    {
        title: "Enterprise Fullstack Engr.",
        description: "Architecting scalable, high-performance web applications tailored to complex business logic.",
        problem: "Delivering end-to-end solutions utilizing Server-Side Rendering (SSR), Static Site Generation (SSG), and edge compute for optimal SEO and millisecond load times.",
        techStack: ["NEXT.js", "Django", "React", "Nest.js", "TypeScript", "Java Spring Boot", "Tanstack Start"]
    },
    {
        title: "API Design & Data Architecture",
        description: "Structuring bulletproof data pipelines, relational schemas, and real-time communication layers.",
        problem: "Designing strictly-typed RESTful and GraphQL APIs, integrating complex ORMs, and establishing low-latency WebSocket/WebRTC connections for dynamic, data-heavy platforms.",
        techStack: ["PostgreSQL / MongoDB", "FastAPI / Node.js", "Prisma / Drizzle", "WebSockets"]
    },
    {
        title: "Sovereign Cloud & DevOps",
        description: "Deploying self-hosted, vendor-agnostic infrastructure for maximum control and performance.",
        problem: "Containerizing applications and managing robust CI/CD pipelines. Transitioning from costly PaaS solutions to highly optimized VPS environments and Docker swarms.",
        techStack: ["Docker / Kubernetes", "VPS / Linux", "Coolify", "AWS / Cloudflare"]
    },
    {
        title: "Cross-Platform Ecosystems",
        description: "Unifying web, mobile, and progressive applications under a single cohesive architecture.",
        problem: "Building native-feeling mobile applications and persistent Progressive Web Apps (PWAs) utilizing complex browser storage APIs and shared monolithic or monorepo codebases.",
        techStack: ["React Native", "PWA Architecture", "Tailwind / ShadCN", "Stripe / Auth Integrations"]
    },
];

servicesData.forEach((service) => {
    const cardHTML =
        `
        <div class="card">
            <div class="card-header">
                <p class="title"> ${service.title} </p>
                <p class="description"> ${service.description} </p>
            </div>
            <div class="card-intro">
                <p class="prob"> ${service.problem} </p>
            </div>
            <div class="card-tech">
            ${service.techStack.map(tech => `<span class="tag"> ${tech} </span>`).join('')}
            </div>
        </div>
    `;

    carousel.insertAdjacentHTML('beforeend', cardHTML);
});