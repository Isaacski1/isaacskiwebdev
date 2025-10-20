// EmailJS Integration for Contact Form
document.addEventListener('DOMContentLoaded', function() {
    const EMAILJS_CONFIG = {
        SERVICE_ID: 'service_pl0bsvl',
        TEMPLATE_ID: 'template_8yrykxj'
    };

    const contactForm = document.getElementById('contact-form1');
    if (!contactForm) {
        console.error('❌ Contact form not found!');
        return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');

    // Message box
    let formMessage = document.createElement('div');
    formMessage.id = 'form-message';
    formMessage.style.marginTop = '15px';
    contactForm.appendChild(formMessage);

    // Handle form submit
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Show loading state
        showLoadingState(true);

        // Send with EmailJS
        emailjs.sendForm(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            contactForm
        ).then(function() {
            window.location.href = 'contact-submited-success.html';
        }).catch(function(error) {
            console.error("❌ Failed:", error);
            showMessage("❌ Failed to submit form. Please try again.", "error");
        }).finally(function() {
            showLoadingState(false);
        });
    });

    // Button loading state
    function showLoadingState(loading) {
        if (loading) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Sending... <i class="icon-arrow-right"></i></span>';
            submitBtn.style.opacity = '0.7';
        } else {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Send Now <i class="icon-arrow-right"></i></span>';
            submitBtn.style.opacity = '1';
        }
    }

    // Success/Error message box
    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.style.padding = '12px';
        formMessage.style.borderRadius = '6px';
        formMessage.style.fontWeight = 'bold';
        formMessage.style.marginTop = '10px';

        if (type === "success") {
            formMessage.style.background = "#d4ffd4";
            formMessage.style.color = "#155724";
            formMessage.style.border = "1px solid #c3e6cb";

            // auto-hide after 5s
            setTimeout(() => {
                formMessage.style.display = "none";
            }, 5000);
        } else {
            formMessage.style.background = "#ffd4d4";
            formMessage.style.color = "#721c24";
            formMessage.style.border = "1px solid #f5c6cb";
        }

        formMessage.style.display = "block";
    }
});
