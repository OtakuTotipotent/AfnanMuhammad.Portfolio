// VARIABLES

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('client-name');
const emailInput = document.getElementById('client-email');
const typeInput = document.getElementById('project-type');
const budgetInput = document.getElementById('budget');
const messageInput = document.getElementById('message');

const btnSubmit = document.getElementById('btn-submit');
const btnText = btnSubmit.querySelector('.btn-text');
const btnWhatsapp = document.getElementById('btn-whatsapp');
const formStatus = document.getElementById('form-status');

// Web3Forms
const WEB3FORMS_ACCESS_KEY = "72039f5d-ee74-4204-915a-7bcc691fc5a3";
const WHATSAPP_NUMBER = "923245368371";

function validateForm() {
    let isValid = true;
    document.querySelectorAll('.input-group').forEach(group => group.classList.remove('error'));

    if (!nameInput.value.trim()) {
        nameInput.parentElement.classList.add('error');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.parentElement.classList.add('error');
        isValid = false;
    }

    if (!messageInput.value.trim()) {
        messageInput.parentElement.classList.add('error');
        isValid = false;
    }

    return isValid;
}

function showStatus(message, type) {
    formStatus.textContent = message;
    formStatus.style.display = 'block';
    formStatus.className = `form-status ${type}`; // classes: 'success' or 'error'
}

form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Stop page reload

    if (!validateForm()) return;

    // UI Feedback: Loading state
    btnSubmit.disabled = true;
    btnText.textContent = "Sending...";
    formStatus.style.display = 'none';

    // Construct the strictly typed JSON payload
    const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Freelance Inquiry: ${typeInput.value}`,
        from_name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        project_type: typeInput.value,
        budget: budgetInput.value,
        message: messageInput.value.trim(),
    };

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (response.status === 200) {
            showStatus("Message transmitted successfully. I will review your project shortly.", "success");
            form.reset();
        } else {
            console.error("API Error:", result);
            showStatus(result.message || "Failed to transmit message. Please try WhatsApp.", "error");
        }
    } catch (error) {
        console.error("Network Error:", error);
        showStatus("Network error occurred. Please check your connection or use WhatsApp.", "error");
    } finally {
        btnSubmit.disabled = false;
        btnText.textContent = "Send via Email";
    }
});

// WhatsApp
btnWhatsapp.addEventListener('click', () => {
    if (!validateForm()) return;

    const text = `New Project Inquiry from ${nameInput.value.trim()}
        Email: ${emailInput.value.trim()}
        Project Type: ${typeInput.value}
        Budget: ${budgetInput.value}
        Message: ${messageInput.value.trim()}
    `;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
});