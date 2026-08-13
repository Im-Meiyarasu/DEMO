/* =========================
   SMOOTH SCROLL
========================= */

function scrollToRegister() {
    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================
   POPUP
========================= */

function showMessage() {
    document.getElementById("popup").classList.add("active");
}

function closePopup() {
    document.getElementById("popup").classList.remove("active");
}


/* Close popup when clicking outside */

document.getElementById("popup").addEventListener("click", function(e) {

    if (e.target === this) {
        closePopup();
    }

});


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const nav = document.querySelector("nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.position = "absolute";
        nav.style.top = "75px";
        nav.style.left = "0";
        nav.style.right = "0";

        nav.style.padding = "25px";

        nav.style.flexDirection = "column";
        nav.style.alignItems = "center";

        nav.style.background = "rgba(12,9,25,.95)";
        nav.style.backdropFilter = "blur(20px)";

        nav.style.borderRadius = "20px";
    }
}


/* =========================
   MOUSE PARALLAX
========================= */

const visual = document.querySelector(".hero-visual");

document.addEventListener("mousemove", (e) => {

    if (window.innerWidth < 900) return;

    const x = (window.innerWidth / 2 - e.clientX) / 80;
    const y = (window.innerHeight / 2 - e.clientY) / 80;

    visual.style.transform =
        `translate(${x}px, ${y}px)`;
});


/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


document
    .querySelectorAll(
        ".track-card, .speaker-card, .about-grid, .cta"
    )
    .forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all .8s ease";

        observer.observe(el);

    });


/* Reveal class */

const style = document.createElement("style");

style.innerHTML = `
    .show {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(style);


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#c084fc";
        }

    });

});