document.addEventListener("DOMContentLoaded", () => {
    // Cache DOM elements
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const form = document.getElementById("contactForm");
    const feedbackMessage = document.getElementById("feedbackMessage");

    // Hamburger menu toggle
    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    }

    // Contact form submission
    if (form && feedbackMessage) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const name = formData.get("name").trim();
            const email = formData.get("email").trim();
            const subject = formData.get("subject").trim();
            const message = formData.get("message").trim();

            if (!name || !email || !subject || !message) {
                showFeedback("Please fill out all the fields.", "red");
                return;
            }

            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
                showFeedback("Please enter a valid email address.", "red");
                return;
            }

            showFeedback("Sending your message...", "blue");

            // Simulate async operation with a timeout
            setTimeout(() => {
                showFeedback("Your message has been sent successfully!", "green");
                form.reset();
            }, 2000);
        });
    }

    // Helper function to display feedback messages
    function showFeedback(message, color) {
        feedbackMessage.textContent = message;
        feedbackMessage.style.color = color;
        feedbackMessage.style.display = "block";
    }
});



 
  
  
