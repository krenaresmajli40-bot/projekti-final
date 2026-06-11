document.addEventListener("DOMContentLoaded", () => {
    const revealItems = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.15
    });

    revealItems.forEach(item => revealObserver.observe(item));

    const counters = document.querySelectorAll(".counter");

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute("data-target"), 10);
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 80));

        const update = () => {
            current += step;
            if (current < target) {
                counter.textContent = current.toLocaleString();
                requestAnimationFrame(update);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };

        update();
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.6
    });

    counters.forEach(counter => counterObserver.observe(counter));

    const footerText = document.querySelector("footer p");
    if (footerText) {
        footerText.textContent = `© ${new Date().getFullYear()} Restaurant Koha - Mitrovicë`;
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("footerYear");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const topBtn = document.getElementById("footerTopBtn");
    if (topBtn) {
        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    const footer = document.querySelector(".site-footer");
    if (footer) {
        footer.addEventListener("mousemove", (e) => {
            const rect = footer.getBoundingClientRect();
            footer.style.setProperty("--mx", `${e.clientX - rect.left}px`);
            footer.style.setProperty("--my", `${e.clientY - rect.top}px`);
        });
    }
});