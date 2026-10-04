const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// =========================
// CLOSE MENU WHEN LINK IS CLICKED
// =========================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// =========================
// STATIC CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thanks, " + name + "! Your message has been received.";

    contactForm.reset();

});


// =========================
// HEADER SHADOW ON SCROLL
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 5px 20px rgba(80, 40, 25, 0.10)";

    } else {

        header.style.boxShadow = "none";

    }

});
