const menuIcon = document.getElementById("menu-icon");
const nav_bar = document.getElementById("nav-bar");
const nav_link = document.querySelectorAll(".nav-link");

// Function to toggle display of the navbar
menuIcon.addEventListener("click", function () {
    if (nav_bar.style.display === "flex") {
      nav_bar.style.display = "none";
    } else {
      nav_bar.style.display = "flex";
    }
});

// On window resize, ensure the navbar is handled appropriately.
window.addEventListener("resize", function() {
    if (window.innerWidth > 860) {
      nav_bar.style.display = "flex";
    } else {
      nav_bar.style.display = "none";
    }
});

nav_link.forEach(heading => {
    heading.addEventListener("click", function () {
        if (window.innerWidth <= 860) {
            nav_bar.style.display = "none";
        }
    });
});