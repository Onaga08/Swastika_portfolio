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


document.addEventListener("DOMContentLoaded", function () {
    const educationSection = document.getElementById("education");
    const timeline_content = document.getElementsByClassName("timeline-item");

    // Function to adjust the position based on screen width
    function adjustEducationPosition() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 1150) { 
            // On mobile, make the position relative and below the timeline
            educationSection.style.position = "relative";
            educationSection.style.marginTop = "500px";  // Space it below the timeline
            educationSection.style.marginBottom = "20px";  // Add some margin at the bottom
            educationSection.style.top = "auto";  // Remove fixed top position
            educationSection.style.right = "-3%";  // Remove fixed right position
            educationSection.style.width = "90%";  // Make the width 90% for mobile
            educationSection.style.padding = "20px";  // Adjust padding for mobile
            educationSection.style.borderLeft = "3px solid purple";  // Remove left border for mobile
            educationSection.style.textAlign = "center";  // Center text on mobile
        } else {
            // On desktop, keep the position fixed and styled for desktop
            educationSection.style.position = "fixed";
            educationSection.style.width = "30%";  // Width 30% for desktop
            educationSection.style.marginTop = "50px";  // Spacing for desktop
            educationSection.style.marginBottom = "50px";  // Spacing for desktop
            educationSection.style.top = "10%";  // Keep it fixed at 10% top
            educationSection.style.right = "6%";  // Fixed position on the right
            educationSection.style.padding = "30px";  // Padding for desktop
            educationSection.style.borderLeft = "3px solid purple";  // Keep border for desktop
            educationSection.style.textAlign = "left";  // Left-align text for desktop
        }
    }

    // Adjust the position when the page loads
    adjustEducationPosition();

    // Re-check the position when the window is resized
    window.addEventListener("resize", adjustEducationPosition);
});
