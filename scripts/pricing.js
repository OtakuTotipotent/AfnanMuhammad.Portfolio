const pricingData = [
    {
        tier: "Bug Fixes & Refactoring",
        target: "For stuck developers & existing projects",
        price: "Hourly / Fixed",
        description: "Stuck on a Next.js hydration error, a slow Django ORM query, or a deployment failure? I will jump in, debug, refactor, and document the exact fix.",
        features: [
            "Frontend UI/UX Debugging",
            "API Endpoint Optimization",
            "Database Query Fixes",
            "Deployment Troubleshooting",
            "No Fix, No Fee Guarantee"
        ],
        ctaText: "Get it Fixed",
        ctaLink: "#contact",
        highlight: false
    },
    {
        tier: "Frontend Development",
        target: "For designers & digital agencies",
        price: "Project Based",
        description: "Pixel-perfect conversion of your Figma designs into responsive, accessible, and highly performant web interfaces using React, Next.js, and Tailwind CSS.",
        features: [
            "Precise Figma to Code",
            "Mobile-First Responsiveness",
            "Interactive UI Components",
            "Performance Optimization",
            "Clean Component Architecture"
        ],
        ctaText: "Start Frontend",
        ctaLink: "#contact",
        highlight: false
    },
    {
        tier: "Full-Stack MVP Build",
        target: "For startup founders & businesses",
        price: "Scoped Sprint",
        description: "Turn your idea into a deployed reality. A fully functional Minimum Viable Product built from scratch with a robust backend, secure database, and polished frontend.",
        features: [
            "Next.js / React Frontend",
            "Django / Node.js Backend",
            "PostgreSQL / MongoDB Setup",
            "Auth & Payments Integration",
            "Free Post-Launch Bug Fixes"
        ],
        ctaText: "Build MVP",
        ctaLink: "#contact",
        highlight: true
    },
    {
        tier: "Students Corner",
        target: "For small to big static/dynamic projects",
        price: "One Time Payment",
        description: "Your project is my project! I'll handover completed project within no time (depending on project scope). Feel free to share your ideas and problems, I will do my best to make you pass the project.",
        features: [
            "Static/Dynamic Application",
            "Frontend/Backend Integration",
            "Resources Sharing & Suggestions",
            "Free 1st Bugs-Fix",
            "Portfolio & Resume Helper"
        ],
        ctaText: "Discuss Project",
        ctaLink: "#contact",
        highlight: false
    },
    {
        tier: "Learning Corner",
        target: "For college students & learners",
        price: "Session / Project",
        description: "Struggling with OOP, Data Structures, or a final year project? I offer 1-on-1 tutoring, code reviews, and structured guidance to help you understand the core logic.",
        features: [
            "C++/Java/Python Tutoring",
            "Javascript/Typescript Tutoring",
            "Final Year Project Guidance",
            "Live Debugging Sessions",
            "Code Review & Best Practices",
            "Portfolio & Resume Advice"
        ],
        ctaText: "Get Mentorship",
        ctaLink: "#contact",
        highlight: false
    },
    {
        tier: "API & AI Integrations",
        target: "For data-driven applications",
        price: "Fixed / Hourly",
        description: "Need to connect third-party APIs (Stripe, Twilio, OpenAI) or build custom endpoints? I design secure and strictly-typed data pipelines.",
        features: [
            "RESTful & GraphQL APIs",
            "Payment Gateway Setup",
            "LLM / OpenAI Integration",
            "Database Schema Modeling",
            "Secure Authentication"
        ],
        ctaText: "Integrate Now",
        ctaLink: "#contact",
        highlight: false
    },
    {
        tier: "Architectural Audit",
        target: "For existing teams & legacy codebases",
        price: "Hourly Consulting",
        description: "I will ruthlessly tear down your existing codebase, identify security flaws, optimize database queries, and provide a strict refactoring roadmap.",
        features: [
            "Comprehensive Code Review",
            "Database Query Optimization",
            "Security & Auth Vulnerability Check",
            "CI/CD Pipeline Assessment",
            "Detailed Technical Report"
        ],
        ctaText: "Request Audit",
        ctaLink: "#contact",
        highlight: false
    },
    {
        tier: "Sovereign MVP Sprint",
        target: "For startups & founders",
        price: "Fixed Project Scope",
        description: "From concept to production in 4-6 weeks. A fully functional, highly scalable Minimum Viable Product built on a self-hosted, vendor-agnostic stack.",
        features: [
            "Full-Stack Next.js / Python Dev",
            "Strictly Typed API Architecture",
            "Self-Hosted DB Setup (PostgreSQL)",
            "Authentication & Payments Integration",
            "Zero PaaS Vendor Lock-in"
        ],
        ctaText: "Start Build",
        ctaLink: "#contact",
        highlight: true
    },
    {
        tier: "Dedicated Engineering",
        target: "For growing enterprises",
        price: "Monthly Retainer",
        description: "Integrate me directly into your remote team as a dedicated full-stack resource. Continuous feature development, DevOps management, and system scaling.",
        features: [
            "Guaranteed Monthly Hours",
            "Priority Bug Resolution",
            "Direct Slack/Discord Integration",
            "Continuous Code Refactoring",
            "DevOps & Server Maintenance"
        ],
        ctaText: "Discuss Retainer",
        ctaLink: "#contact",
        highlight: false
    },
    {
        tier: "Intelligent Automation",
        target: "For data-heavy enterprises",
        price: "Scoped Sprint",
        description: "I will architect and deploy custom machine learning integrations, automated content pipelines, or predictive data models directly into your sovereign infrastructure.",
        features: [
            "Custom LLM & API Integration",
            "Vector Database Architecture",
            "Data Cleaning & Preprocessing",
            "Automated Content Generation",
            "Predictive Analytics Dashboards"
        ],
        ctaText: "Explore AI Solutions",
        ctaLink: "#contact",
        highlight: false
    },
];

function renderPricing() {
    const container = document.querySelector('.pricing-container');
    if (!container) return;

    pricingData.forEach(plan => {
        const highlightClass = plan.highlight ? 'highlight-tier' : '';
        const featuresList = plan.features.map(f => `<li><span class="check">✓</span> ${f}</li>`).join('');

        const cardHTML = `
            <div class="card pricing-card ${highlightClass}">
                <div class="pricing-header">
                    <h5 class="tier-name">${plan.tier}</h5>
                    <p class="target-audience">${plan.target}</p>
                    <h3 class="price">${plan.price}</h3>
                    <p class="tier-desc">${plan.description}</p>
                </div>
                <ul class="features-list">
                    ${featuresList}
                </ul>
                <a href="${plan.ctaLink}" class="btn-primary pricing-btn">${plan.ctaText}</a>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

renderPricing();