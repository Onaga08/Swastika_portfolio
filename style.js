document.addEventListener("DOMContentLoaded", function () {
    const experienceBtn = document.getElementById("experience-btn");
    const homeBtn = document.getElementById("home-btn");
    const heroSection = document.querySelector(".content");
    const quoteSection = document.querySelector(".quote-container");
    const timeline = document.getElementById("timeline-page");

    experienceBtn.addEventListener("click", function (event) {
        event.preventDefault();

        heroSection.classList.add("hidden");
        quoteSection.classList.add("hidden");

        timeline.classList.remove("hidden");

        document.querySelectorAll(".navbar nav ul li a").forEach(link => {
            link.classList.remove("active");
        });
        experienceBtn.classList.add("active");

        experienceBtn.style.color = "pink";  
        homeBtn.style.color = "black"; 
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

    function adjustEducationPosition() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 1150) { 
            educationSection.style.position = "relative";
            educationSection.style.marginTop = "500px";  
            educationSection.style.marginBottom = "20px";  
            educationSection.style.top = "auto"; 
            educationSection.style.right = "-3%"; 
            educationSection.style.width = "85%"; 
            educationSection.style.padding = "20px"; 
            educationSection.style.borderLeft = "3px solid purple";  
            educationSection.style.textAlign = "center"; 
        } else {
            educationSection.style.position = "fixed";
            educationSection.style.width = "30%"; 
            educationSection.style.marginTop = "50px";  
            educationSection.style.marginBottom = "50px";  
            educationSection.style.top = "10%";  
            educationSection.style.right = "6%";  
            educationSection.style.padding = "30px";
            educationSection.style.borderLeft = "3px solid purple";
            educationSection.style.textAlign = "left";
        }
    }

    adjustEducationPosition();

    window.addEventListener("resize", adjustEducationPosition);
});
