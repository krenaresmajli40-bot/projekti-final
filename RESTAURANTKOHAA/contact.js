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
    const dita = document.getElementById("dita").value;
    const ora = document.getElementById("ora").value;
    const msg = document.getElementById("msg");

    if (emri === "" || mbiemri === "" || telefoni === "" || mesazhi === "" || !dita || !ora) {
        msg.innerText = "Ju lutem plotësoni të gjitha fushat dhe zgjidhni ditën dhe orarin!";
        msg.style.color = "#ff6b6b";
        return;
    }

    msg.innerText = "";
    document.getElementById("popup").style.display = "flex";

    document.getElementById("emri").value = "";
    document.getElementById("mbiemri").value = "";
    document.getElementById("telefoni").value = "";
    document.getElementById("mesazhi").value = "";
    document.getElementById("dita").value = "";
    document.getElementById("ora").innerHTML = '<option value="" disabled selected>Zgjidh orarin</option>';
    document.getElementById("selectedDayText").textContent = "Dita: E Hënë";
    document.getElementById("selectedTimeText").textContent = "Orari i punës: 08:00 - 23:00";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
    const scheduleMap = {
        hene: {
            label: "E Hënë",
            range: "08:00 - 23:00",
            slots: ["08:00 - 11:00", "11:00 - 14:00", "14:00 - 17:00", "17:00 - 20:00", "20:00 - 23:00"]
        },
        mar: {
            label: "E Martë",
            range: "08:00 - 23:00",
            slots: ["08:00 - 11:00", "11:00 - 14:00", "14:00 - 17:00", "17:00 - 20:00", "20:00 - 23:00"]
        },
        mer: {
            label: "E Mërkurë",
            range: "08:00 - 23:00",
            slots: ["08:00 - 11:00", "11:00 - 14:00", "14:00 - 17:00", "17:00 - 20:00", "20:00 - 23:00"]
        },
        enj: {
            label: "E Enjte",
            range: "08:00 - 23:00",
            slots: ["08:00 - 11:00", "11:00 - 14:00", "14:00 - 17:00", "17:00 - 20:00", "20:00 - 23:00"]
        },
        pre: {
            label: "E Premte",
            range: "08:00 - 23:00",
            slots: ["08:00 - 11:00", "11:00 - 14:00", "14:00 - 17:00", "17:00 - 20:00", "20:00 - 23:00"]
        },
        sht: {
            label: "E Shtunë",
            range: "09:00 - 00:00",
            slots: ["09:00 - 12:00", "12:00 - 15:00", "15:00 - 18:00", "18:00 - 21:00", "21:00 - 00:00"]
        },
        die: {
            label: "E Diel",
            range: "09:00 - 00:00",
            slots: ["09:00 - 12:00", "12:00 - 15:00", "15:00 - 18:00", "18:00 - 21:00", "21:00 - 00:00"]
        }
    };

    const daySelect = document.getElementById("dita");
    const timeSelect = document.getElementById("ora");
    const selectedDayText = document.getElementById("selectedDayText");
    const selectedTimeText = document.getElementById("selectedTimeText");
    const dayBadges = document.querySelectorAll(".days-wrap .day");

    function populateTimeOptions(dayKey) {
        const schedule = scheduleMap[dayKey];
        if (!schedule || !timeSelect) return;

        timeSelect.innerHTML = '<option value="" disabled selected>Zgjidh orarin</option>';
        schedule.slots.forEach(slot => {
            const option = document.createElement("option");
            option.value = slot;
            option.textContent = slot;
            timeSelect.appendChild(option);
        });
    }

    function updateScheduleLabels(dayKey, timeValue) {
        const schedule = scheduleMap[dayKey];
        if (!schedule) return;

        if (selectedDayText) {
            selectedDayText.textContent = `Dita: ${schedule.label}`;
        }
        if (selectedTimeText) {
            selectedTimeText.textContent = timeValue ? `Orari i preferuar: ${timeValue}` : `Orari i punës: ${schedule.range}`;
        }
    }

    function setActiveDay(dayKey) {
        dayBadges.forEach(badge => {
            badge.classList.toggle("active-day", badge.dataset.day === dayKey);
        });

        if (daySelect) {
            daySelect.value = dayKey;
        }

        populateTimeOptions(dayKey);
        updateScheduleLabels(dayKey, "");
    }

    dayBadges.forEach(badge => {
        badge.addEventListener("click", () => {
            const dayKey = badge.dataset.day;
            if (dayKey) {
                setActiveDay(dayKey);
            }
        });
    });

    if (daySelect) {
        daySelect.addEventListener("change", () => {
            setActiveDay(daySelect.value);
        });
    }

    if (timeSelect) {
        timeSelect.addEventListener("change", () => {
            updateScheduleLabels(daySelect.value, timeSelect.value);
        });
    }

    setActiveDay("hene");

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

