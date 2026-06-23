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

    const images = [
        "assets/menu1.png",
        "assets/menu2.png"
    ];

    const titles = [
        "Menu e parë",
        "Menu e dytë"
    ];

    const texts = [
        "Shfleto specialitetet dhe ofertat tona të para.",
        "Pjata të freskëta, shije të veçantë dhe prezantim modern."
    ];

    let current = 0;
    let sliderTimer = null;

    const menuImage = document.getElementById("menuImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dots = document.querySelectorAll(".dot");
    const slideTitle = document.getElementById("slideTitle");
    const slideText = document.getElementById("slideText");

    if (!menuImage || !prevBtn || !nextBtn || !slideTitle || !slideText) return;

    function updateSlider(index) {
        menuImage.style.opacity = "0";
        menuImage.style.transform = "scale(0.985)";

        setTimeout(() => {
            menuImage.src = images[index];
            slideTitle.textContent = titles[index];
            slideText.textContent = texts[index];

            dots.forEach(dot => dot.classList.remove("active"));
            if (dots[index]) dots[index].classList.add("active");

            menuImage.style.opacity = "1";
            menuImage.style.transform = "scale(1)";
        }, 250);
    }

    function nextSlide() {
        current = (current + 1) % images.length;
        updateSlider(current);
    }

    function prevSlide() {
        current = (current - 1 + images.length) % images.length;
        updateSlider(current);
    }

    function startAutoSlide() {
        sliderTimer = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(sliderTimer);
        startAutoSlide();
    }

    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    updateSlider(0);
    startAutoSlide();

    const footerYear = document.getElementById("footerYear");
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    const footerTopBtn = document.getElementById("footerTopBtn");
    if (footerTopBtn) {
        footerTopBtn.addEventListener("click", () => {
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