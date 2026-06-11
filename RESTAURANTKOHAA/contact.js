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
});

function dergo() {
    const emri = document.getElementById("emri").value.trim();
    const mbiemri = document.getElementById("mbiemri").value.trim();
    const telefoni = document.getElementById("telefoni").value.trim();
    const mesazhi = document.getElementById("mesazhi").value.trim();
    const msg = document.getElementById("msg");

    if (emri === "" || mbiemri === "" || telefoni === "" || mesazhi === "") {
        msg.innerText = "Ju lutem plotësoni të gjitha fushat!";
        msg.style.color = "#ff6b6b";
        return;
    }

    msg.innerText = "";
    document.getElementById("popup").style.display = "flex";

    document.getElementById("emri").value = "";
    document.getElementById("mbiemri").value = "";
    document.getElementById("telefoni").value = "";
    document.getElementById("mesazhi").value = "";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("contactYear");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const goTopBtn = document.getElementById("goTopBtn");
    if (goTopBtn) {
        goTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});