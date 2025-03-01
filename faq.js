// FAQ Toggle Functionality
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", function () {
        const answer = this.nextElementSibling;
        const icon = this.querySelector(".toggle");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.textContent = "+";
        } else {
            // Close other open answers before opening a new one
            document.querySelectorAll(".faq-answer").forEach(item => item.style.display = "none");
            document.querySelectorAll(".toggle").forEach(icon => icon.textContent = "+");

            answer.style.display = "block";
            icon.textContent = "−";
        }
    });
});
