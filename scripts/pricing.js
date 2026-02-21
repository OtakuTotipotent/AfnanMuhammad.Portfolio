const pricingData = [
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
        tier: "Students Corner",
        target: "For small to big static/dynamic projects",
        price: "One Time Payment",
        description: "Your project is my project! I'll handover completed project within no time (depending on project scope). Feel free to share your ideas and problems, I will do my best to make your pass the project.",
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