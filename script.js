const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-content");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("is-active");
   
});

const arrow = document.querySelector(".arrow");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 600) {
        arrow.classList.add("show");
    } else {
        arrow.classList.remove("show");
    }
});