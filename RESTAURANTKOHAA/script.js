


// =========================
// RESTAURANT KOHA JS
// =========================

// Welcome Message
window.onload = function () {
    console.log("Mirë se vini në Restaurant Koha!");
};



// =========================
// CHANGE NAVBAR COLOR
// =========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "darkred";
        navbar.style.transition = "0.5s";
    } else {
        navbar.style.background = "#111";
    }

});

// =========================
// MENU CARD HOVER EFFECT
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", function () {
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.3)";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";
    });

});

// =========================
// DARK MODE
// =========================

const darkBtn = document.createElement("button");

darkBtn.innerText = "Dark Mode";

darkBtn.style.position = "fixed";
darkBtn.style.right = "20px";
darkBtn.style.bottom = "20px";
darkBtn.style.padding = "12px";
darkBtn.style.border = "none";
darkBtn.style.background = "gold";
darkBtn.style.cursor = "pointer";
darkBtn.style.borderRadius = "8px";
darkBtn.style.fontWeight = "bold";

document.body.appendChild(darkBtn);

let darkMode = false;

darkBtn.addEventListener("click", function () {

    if (!darkMode) {

        document.body.style.background = "#111";
        document.body.style.color = "white";

        document.querySelectorAll(".card").forEach(card => {
            card.style.background = "#222";
            card.style.color = "white";
        });

        darkBtn.innerText = "Light Mode";

        darkMode = true;

    } else {

        document.body.style.background = "#f5f5f5";
        document.body.style.color = "#333";

        document.querySelectorAll(".card").forEach(card => {
            card.style.background = "#f0f0f0";
            card.style.color = "#333";
        });

        darkBtn.innerText = "Dark Mode";

        darkMode = false;
    }

});

// =========================
// LIVE CLOCK
// =========================

const clock = document.createElement("div");

clock.style.position = "fixed";
clock.style.top = "20px";
clock.style.right = "20px";
clock.style.background = "gold";
clock.style.padding = "10px";
clock.style.borderRadius = "10px";
clock.style.fontWeight = "bold";
clock.style.zIndex = "999";

document.body.appendChild(clock);

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

// =========================
// SCROLL TO TOP BUTTON
// =========================

const topBtn = document.createElement("button");

topBtn.innerText = "↑";

topBtn.style.position = "fixed";
topBtn.style.bottom = "80px";
topBtn.style.right = "20px";
topBtn.style.padding = "15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "darkred";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

document.body.appendChild(topBtn);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================
// TYPING EFFECT
// =========================

const text = "Shija më e mirë në Mitrovicë 🍴";

let index = 0;

const typing = document.createElement("h2");

typing.style.textAlign = "center";
typing.style.marginTop = "30px";

document.body.prepend(typing);

function writeText() {

    if (index < text.length) {

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(writeText, 100);

    }

}

writeText();

// =========================
// RANDOM BACKGROUND COLORS
// =========================

const colors = [
    "#1a1a1a",
    "#2c3e50",
    "#8b0000",
    "#34495e"
];

setInterval(() => {

    const random = Math.floor(Math.random() * colors.length);

    document.querySelector("footer").style.background = colors[random];

}, 3000);



// script.js

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // Always enable dark mode by default
    body.classList.add("dark-mode");

    // Optional: toggle button (nëse e shton më vonë)
    const toggle = document.getElementById("darkToggle");

    if (toggle) {
        toggle.addEventListener("click", () => {
            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        body.classList.remove("dark-mode");
    }
});


const menuFoto = document.querySelector(".menu-foto");

const fotot = [
    "./assets/menu1.jpg",
    "./assets/menu2.jpg",
    "./assets/menu3.jpg"
];

let index = 0;

menuFoto.style.backgroundImage = `url('${fotot[index]}')`;

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {
        index++;

        if (index >= fotot.length) {
            index = 0;
        }

        menuFoto.style.opacity = "0";

        setTimeout(() => {
            menuFoto.style.backgroundImage =
                `url('${fotot[index]}')`;
            menuFoto.style.opacity = "1";
        }, 300);
    }

    if (e.key === "ArrowLeft") {
        index--;

        if (index < 0) {
            index = fotot.length - 1;
        }

        menuFoto.style.opacity = "0";

        setTimeout(() => {
            menuFoto.style.backgroundImage =
                `url('${fotot[index]}')`;
            menuFoto.style.opacity = "1";
        }, 300);
    }
});