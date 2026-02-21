const downloadsData = [
    {
        title: "Executive Resume (1-Page)",
        description: "ATS-optimized summary of my core TypeScript/Python stack, BS-IT academics, and immediate professional impact.",
        fileType: "PDF",
        fileSize: "153 KB",
        fileName: "Afnan_Muhammad_Resume.pdf",
        link: "assets/Afnan_executive_resume.pdf", // "assets/resume.pdf"
        highlight: true
    },
    {
        title: "Comprehensive Technical CV",
        description: "An exhaustive, completist breakdown of my database architectures, API designs, and multi-day learning sprints.",
        fileType: "PDF",
        fileSize: "267 KB",
        fileName: "Afnan_Muhammad_Full_CV.pdf",
        link: "assets/Afnan_comprehensive_cv.pdf",
        highlight: false
    },
    {
        title: "Sovereign Stack Manifesto",
        description: "A brief guide outlining my methodology for building independent, highly performant, self-hosted web ecosystems.",
        fileType: "PDF",
        fileSize: "228 KB",
        fileName: "Afnan_Sovereign_Architecture.pdf",
        link: "assets/Afnan_sovereign_manifesto.pdf",
        highlight: false
    },
    {
        title: "PGP Public Key",
        description: "For clients requiring strictly confidential, encrypted communication regarding proprietary codebases.",
        fileType: "ASC",
        fileSize: "4 KB",
        fileName: "Afnan_Public_Key.asc",
        link: "assets/Afnan_Public_key.asc",
        highlight: false
    }
];

function renderDownloads() {
    const container = document.querySelector('.downloads-container');
    if (!container) return;

    downloadsData.forEach(doc => {
        // Apply a special class if the card is highlighted (e.g., the primary Resume)
        const highlightClass = doc.highlight ? 'highlight-card' : '';

        const cardHTML = `
            <div class="card download-card ${highlightClass}">
                <div class="doc-info">
                    <h5 class="doc-title">${doc.title}</h5>
                    <p class="doc-description">${doc.description}</p>
                </div>
                <div class="doc-meta">
                    <span class="tag">${doc.fileType}</span>
                    <span class="file-size">${doc.fileSize}</span>
                </div>
                <a href="${doc.link}" download="${doc.fileName}" class="btn-primary download-btn">
                    Download File <span>&#8595;</span>
                </a>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

renderDownloads();