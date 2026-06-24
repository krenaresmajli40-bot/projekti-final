document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("footerYear");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const clock = document.getElementById("clock");

    function updateClock() {
        const now = new Date();

        const date = now.toLocaleDateString("sq-AL", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

        if (clock) {
            clock.textContent = date;
        }
    }

    updateClock();
    setInterval(updateClock, 1000);

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