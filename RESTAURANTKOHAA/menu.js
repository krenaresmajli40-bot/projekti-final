document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "assets/menu1.png",
        "assets/menu2.png"
    ];

    const titles = [
        "Menu e parë",
        "Menu e dytë"
    ];

    const texts = [
        "Shfleto ofertat dhe specialitetet tona.",
        "Pjata të freskëta dhe shije të veçantë."
    ];

    let current = 0;

    const menuImage = document.getElementById("menuImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dots = document.querySelectorAll(".dot");
    const slideTitle = document.getElementById("slideTitle");
    const slideText = document.getElementById("slideText");

    function updateSlider(index) {
        menuImage.style.opacity = "0";

        setTimeout(() => {
            menuImage.src = images[index];
            slideTitle.textContent = titles[index];
            slideText.textContent = texts[index];

            dots.forEach(dot => dot.classList.remove("active"));
            dots[index].classList.add("active");

            menuImage.style.opacity = "1";
        }, 150);
    }

    nextBtn.addEventListener("click", () => {
        current = (current + 1) % images.length;
        updateSlider(current);
    });

    prevBtn.addEventListener("click", () => {
        current = (current - 1 + images.length) % images.length;
        updateSlider(current);
    });

    setInterval(() => {
        current = (current + 1) % images.length;
        updateSlider(current);
    }, 5000);
});