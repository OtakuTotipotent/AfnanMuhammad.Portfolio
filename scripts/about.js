const slices = document.querySelectorAll('#about .image');
const accordions = document.querySelector(".accordions");

const aboutData = [
    {
        question: "Who is",
        highlight: "Afnan Muhammad",
        answer: "A BS-IT software engineer and technologist based in Pakistan. Driven by a fastidious & completist mindset, he builds high- performance web applications and meticulously working toward becoming a principal Software Architect in the era of AI & Data Science."
    },
    {
        question: "What are",
        highlight: "Academic Foundations",
        answer: "A Bachelor of Information Technology (BS-IT: 2021-2025) at Bahauddin Zakariya University Multan(BZU).His academic deep dives encompass Computer Sciences, Software Engineering, Web Technologies, Database Management Systems, Functional & Object Oriented Programming, Cyber Security, Data & Systems, Computer Graphics, Probability & Statistics, Linear Algebra, Business Administration and IT Project Management."
    },
    {
        question: "What is",
        highlight: "Core Tech Stack",
        answer: "Specialized in full-stack web development utilizing modern JavaScript/TypeScript and  Python frameworks, alongside Java Springboot.He highly invested in the \"Sovereign Stack\"  methodology—building independent, highly performant, and self- hosted software ecosystems."
    },
    {
        question: "What about",
        highlight: "AI & Data Science",
        answer: " He does not just consumes APIs. His focus bridges traditional software engineering with Data Science and AI models integration, engineering automated content pipelines and sophisticated AI video generation platforms.He plans to learn & involve in ArtificialIntelligence in context of Web Technologies specifically."
    },
    {
        question: "Abilities for",
        highlight: "Global Teams",
        answer: "Absolutely. Clear communication is as critical as clean code. He is fluent in English, Urdu, and Hindi and even understands Arabic at basic level(currently), enabling seamless collaboration and architectural discussions within diverse, remote international teams."
    },
    {
        question: "Understanding of",
        highlight: "Business Logic",
        answer: " Code must serve the market. Beyond system architecture, he maintains a strong interest in e- commerce mechanics, dropshipping business models, software houses, and other real world tech oriented systems.This ensures the platforms he builds are optimized for actual user conversion and business viability."
    },
    {
        question: "What is",
        highlight: "Engineering Philosophy",
        answer: "He is an inquisitive learner who demands in-depth, low-level technical explanations.He thrives under direct, unfiltered feedback and ruthless code reviews.If an architecture is weak, he rebuilds it until it is bulletproof."
    },
    {
        question: "What are the",
        highlight: "Preferences",
        answer: "Currently (2026-2027), he prefers remote job, freelance projects. In future, he aims for higher education(MS/ MPhil / PhD) and big tech roles as an experienced software engineer.He is open to work!"
    }
]

aboutData.forEach((query, index) => {
    const isOpen = index === 0 ? 'open' : '';
    const accordionHTML = `
    <details name="accordion" ${isOpen}>
        <summary> ${query.question} <span class="highlight"> ${query.highlight} </span></summary>
        <p class="answer"> ${query.answer} </p>
    </details>
    `;

    accordions.insertAdjacentHTML("beforeend", accordionHTML);
});

slices.forEach((slice) => {
    slice.addEventListener("click", () => {
        slices.forEach(s => s.classList.remove('active'));

        slice.classList.add("active");
    });
});