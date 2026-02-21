# Afnan Muhammad | Software Engineering Portfolio

![Portfolio Preview](images/00.webp)

## Architectural Philosophy

This repository contains the source code for my professional portfolio. Rather than relying on heavy, bloated frameworks (like React or Next.js) for a strictly static site, this application is engineered using **Vanilla JavaScript, HTML5, and pure CSS3**.

This decision was fastidious and deliberate. It enforces a zero-dependency architecture, guarantees absolute minimal bundle sizes, and achieves instantaneous edge-rendering.

## The Sovereign Stack Approach

As a Full-Stack Software Engineer & Architect, I specialize in the "Sovereign Stack" methodology—deploying self-hosted, vendor-agnostic infrastructure to reduce PaaS overhead and maximize system control. While this portfolio is statically hosted, my core competencies encompass:

* **Languages:** TypeScript, Python, Java, C++, SQL.
* **Frontend Ecosystem:** Next.js, React, Tailwind CSS, PWA Architecture, SSR/SSG.
* **Backend & APIs:** Django, Node.js, FastAPI, Java Spring Boot, RESTful & GraphQL APIs.
* **DevOps & Infrastructure:** Docker, VPS, Linux OS, Coolify, CI/CD Pipelines.
* **Data Science & AI:** Custom LLM integrations, predictive modeling, vector databases, and automated content generation pipelines.

## Repository Structure & Engineering Constraints

* `index.html`: The semantic, accessible entry point.
* `styles/`: CSS architecture utilizing CSS Variables for strict theme enforcement (Glassmorphism UI), CSS Grid for complex bento-box layouts, and a dedicated `mobiles.css` for absolute mobile degradation.
* `scripts/`: Decoupled JavaScript modules. Data arrays (`projects.js`, `pricing.js`, `services.js`) are strictly isolated from DOM manipulation logic (`main.js`, `navbar.js`) to ensure a maintainable, JSON-like data hydration pipeline.
* `assets/`: Securely hosts my ATS-optimized Executive Resume, Comprehensive CV, Sovereign Stack Manifesto, and PGP Public Key (`.asc`) for encrypted enterprise communication.

## Headless API Integration

This static site utilizes **Web3Forms** for headless form submissions. It hijacks standard `mailto:` fallbacks and transmits strictly-typed JSON payloads via the native `fetch` API, providing asynchronous UI feedback without requiring a dedicated backend server or exposing private email endpoints.

## Local Deployment & Auditing

To run this project locally for development or auditing:

1. Clone the repository:

   ```bash
   git clone [https://github.com/OtakuTotipotent/AfnanMuhammad.Portfolio.git](https://github.com/OtakuTotipotent/AfnanMuhammad.Portfolio.git)
