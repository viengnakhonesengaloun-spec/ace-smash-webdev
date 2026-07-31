/* =====================================
   ACE SMASH - script.js
===================================== */

// =========================
// Sticky Header
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


// =========================
// Active Menu
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =========================
// Scroll Animation
// =========================

const reveals = document.querySelectorAll(
    ".hero-text, .hero-image, .about, .skills, .card"
);

function revealAnimation() {

    const windowHeight = window.innerHeight;

    reveals.forEach(item => {

        const revealTop = item.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealAnimation);

revealAnimation();


// =========================
// Back To Top Button
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// =========================
// Card Hover Effect
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// =========================
// Button Ripple Effect
// =========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = diameter + "px";
        circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";
        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});


// =========================
// Hero Fade In
// =========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


console.log("ACE SMASH Loaded Successfully");

/* =====================================
   Mobile Menu
===================================== */

const hamburger = document.querySelector(".hamburger");

const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    menu.classList.toggle("active");

});

/* =====================================
   Close Menu เมื่อกด Link
===================================== */

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");

        menu.classList.remove("active");

    });

});