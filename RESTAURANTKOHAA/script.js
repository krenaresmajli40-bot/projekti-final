// =====================================
// RESTAURANT KOHA - SCRIPT.JS
// =====================================

// ORA DHE DATA LIVE

const clock = document.getElementById("clock");

function updateClock() {

const now = new Date();

const time = now.toLocaleTimeString("sq-AL");

const date = now.toLocaleDateString("sq-AL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
});

if(clock){
    clock.innerHTML = `
        ${time}
        <br>
        <small>${date}</small>
    `;
}


}

updateClock();
setInterval(updateClock, 1000);

// =====================================
// NAVBAR SCROLL EFFECT
// =====================================

window.addEventListener("scroll", () => {


const navbar = document.querySelector(".navbar");

if (!navbar) return;

if (window.scrollY > 50) {

    navbar.style.background =
    "rgba(0,0,0,.95)";

    navbar.style.borderBottom =
    "2px solid gold";

    navbar.style.boxShadow =
    "0 5px 20px rgba(0,0,0,.5)";

} else {

    navbar.style.background =
    "rgba(0,0,0,.50)";

    navbar.style.boxShadow = "none";
}
```

});

// =====================================
// TYPING EFFECT
// =====================================

const heroTitle =
document.querySelector(".hero h2");

if(heroTitle){

```
const text =
"Shije që mbetet në kujtesë";

heroTitle.innerHTML = "";

let i = 0;

function typing(){

    if(i < text.length){

        heroTitle.innerHTML +=
        text.charAt(i);

        i++;

        setTimeout(typing, 80);
    }

}

typing();
```

}

// =====================================
// COUNTER ANIMATION
// =====================================

const counters =
document.querySelectorAll(".stats h3");

counters.forEach(counter => {

```
const target =
parseInt(counter.innerText);

let count = 0;

const updateCounter = () => {

    const increment =
    target / 100;

    if(count < target){

        count += increment;

        counter.innerText =
        Math.floor(count) + "+";

        requestAnimationFrame(
        updateCounter);

    }else{

        counter.innerText =
        target + "+";
    }

};

updateCounter();
```

});

// =====================================
// SCROLL TO TOP BUTTON
// =====================================

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "60px";
topBtn.style.height = "60px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "gold";
topBtn.style.color = "#111";
topBtn.style.fontSize = "24px";
topBtn.style.fontWeight = "bold";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";
topBtn.style.boxShadow =
"0 5px 15px rgba(0,0,0,.4)";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

```
if(window.scrollY > 300){

    topBtn.style.display =
    "block";

}else{

    topBtn.style.display =
    "none";
}
```

});

topBtn.addEventListener("click", () => {

```
window.scrollTo({
    top:0,
    behavior:"smooth"
});
```

});

// =====================================
// WELCOME MESSAGE
// =====================================

window.addEventListener("load", () => {

```
setTimeout(() => {

    console.log(
    "Mirë se vini në Restaurant Koha 🍽️");

}, 500);
```

});

// =====================================
// PAGE FADE IN
// =====================================

document.body.style.opacity = "0";

window.addEventListener("load", () => {

```
document.body.style.transition =
"opacity 1.5s ease";

document.body.style.opacity = "1";
```

});

// =====================================
// DARK / LIGHT MODE
// =====================================

const darkBtn =
document.createElement("button");

darkBtn.innerHTML = "🌙";

darkBtn.style.position = "fixed";
darkBtn.style.left = "20px";
darkBtn.style.bottom = "20px";
darkBtn.style.width = "60px";
darkBtn.style.height = "60px";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "50%";
darkBtn.style.cursor = "pointer";
darkBtn.style.fontSize = "24px";
darkBtn.style.background = "white";
darkBtn.style.zIndex = "9999";

document.body.appendChild(darkBtn);

let darkMode = true;

darkBtn.addEventListener("click", () => {

```
if(darkMode){

    document.body.style.filter =
    "brightness(1.15)";

    darkBtn.innerHTML = "☀️";

    darkMode = false;

}else{

    document.body.style.filter =
    "brightness(1)";

    darkBtn.innerHTML = "🌙";

    darkMode = true;
}
```

});

// =====================================
// PARALLAX HERO
// =====================================

window.addEventListener("scroll", () => {

```
const hero =
document.querySelector(".hero");

if(hero){

    hero.style.backgroundPositionY =
    window.pageYOffset * 0.5 + "px";
}
```

});

// =====================================
// BUTTON HOVER EFFECT
// =====================================

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(btn => {

```
btn.addEventListener(
"mouseenter", () => {

    btn.style.transform =
    "translateY(-5px) scale(1.05)";

});

btn.addEventListener(
"mouseleave", () => {

    btn.style.transform =
    "translateY(0) scale(1)";
});


});




// =====================================
// END
// =====================================
