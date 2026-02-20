const socialsData = [
    {
        platform: "GitHub",
        handle: "@OtakuTotipotent",
        link: "https://github.com/OtakuTotipotent",
        color: "#181717",
        spanClass: "span-col-2 span-row-2",
        colorVariation: "--color-tertiary"
    },
    {
        platform: "Fiverr",
        handle: "Not available yet!",
        link: "#",
        color: "#00b22b ",
        spanClass: "",
        colorVariation: "--color-secondary"
    },
    {
        platform: "Freelancer",
        handle: "Not available yet!",
        link: "#",
        color: "#2192EA",
        spanClass: "",
        colorVariation: "--color-secondary"
    },
    {
        platform: "Upwork",
        handle: "Not available yet!",
        link: "#",
        color: "#108A00",
        spanClass: "span-col-2",
        colorVariation: "--color-tertiary"
    },
    {
        platform: "Email",
        handle: "ototipotent@gmail.com",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=ototipotent@gmail.com",
        color: "#EA4335",
        spanClass: "",
        colorVariation: "--color-tertiary"
    },
    {
        platform: "WhatsApp",
        handle: "+92 3XX XXXXXXX",
        link: "https://wa.me/923245368371",
        color: "var(--glass-secondary)",
        spanClass: "span-col-2",
        colorVariation: "--color-secondary"
    },
    {
        platform: "Guru",
        handle: "Not available yet!",
        link: "#",
        color: "#2A3A45",
        spanClass: "",
        colorVariation: "--color-tertiary"
    },
    {
        platform: "LinkedIn",
        handle: "in/otakutotipotent",
        link: "https://pk.linkedin.com/in/otakutotipotent",
        color: "#0A66C2",
        spanClass: "span-col-2",
        colorVariation: "--color-tertiary"
    },
    {
        platform: "Indeed",
        handle: "Not available yet!",
        link: "#",
        color: "#ff6600",
        spanClass: "span-col-2",
        colorVariation: "--color-secondary"
    },
    {
        platform: "FlexJobs",
        handle: "Not available yet!",
        link: "#",
        color: "#8e35b1",
        spanClass: "",
        colorVariation: "--color-tertiary"
    },
    {
        platform: "Braintrust",
        handle: "Not available yet!",
        link: "#",
        color: "#181717",
        spanClass: "span-col-2",
        colorVariation: "--color-tertiary"
    },
    {
        platform: "Preply",
        handle: "Not available yet!",
        link: "#",
        color: "#FF79AC",
        spanClass: "",
        colorVariation: "--color-secondary"
    },
    {
        platform: "PeoplePerHour",
        handle: "Not available yet!",
        link: "#",
        color: "#203148",
        spanClass: "span-col-2",
        colorVariation: "--color-tertiary"
    },
    {
        platform: "HubStaff",
        handle: "Not available yet!",
        link: "#",
        color: "#2A4DFF",
        spanClass: "",
        colorVariation: "--color-tertiary"
    },
    {
        platform: "Gun.io",
        handle: "Not available yet!",
        link: "#",
        color: "#00000055",
        spanClass: "",
        colorVariation: "--color-tertiary"
    },
];

const socialsContainer = document.querySelector('.socials-container');

socialsData.forEach(social => {
    const cardHTML = `
        <a href="${social.link}" target="_blank" rel="noopener noreferrer" class="social-card ${social.spanClass}" style="background-color: ${social.color};" aria-label="Open ${social.platform}">
            <div class="social-content">
                <p class="platform-name" style="color: var(${social.colorVariation});">${social.platform}</p>
                <p class="platform-handle" style="color: var(${social.colorVariation});">${social.handle}</p>
            </div>
            <span class="bg-text">${social.platform}</span>
        </a>
        `;
    socialsContainer.insertAdjacentHTML('beforeend', cardHTML);
});
