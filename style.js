document.addEventListener("DOMContentLoaded", function () {
    const experienceBtn = document.getElementById("experience-btn");
    const homeBtn = document.getElementById("home-btn");
    const heroSection = document.querySelector(".content");
    const quoteSection = document.querySelector(".quote-container");
    const timeline = document.getElementById("timeline-page");

    experienceBtn.addEventListener("click", function (event) {
        event.preventDefault();

        // Hide hero and quote sections
        heroSection.classList.add("hidden");
        quoteSection.classList.add("hidden");
        // Show timeline
        timeline.classList.remove("hidden");

        // Highlight active button
        document.querySelectorAll(".navbar nav ul li a").forEach(link => {
            link.classList.remove("active");
        });
        experienceBtn.classList.add("active");

        // Make the experience button red
        experienceBtn.style.color = "pink";  // Changes button color to red
        homeBtn.style.color = "black";  // Reset home button color
    });

    homeBtn.addEventListener("click", function (event) {
        event.preventDefault();

        // Show hero and quote sections
        heroSection.classList.remove("hidden");
        quoteSection.classList.remove("hidden");

        // Hide timeline
        timeline.classList.add("hidden");

        // Reset navbar button colors
        document.querySelectorAll(".navbar nav ul li a").forEach(link => {
            link.classList.remove("active");
        });

        // Make the home button red
        homeBtn.style.color = "pink";  // Changes button color to red
        experienceBtn.style.color = "black";  // Reset experience button color
    });
});
