// burger menu
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('burger').addEventListener('click', function () {
        document.querySelector('header').classList.toggle('open')
    })
})
// Carousel
const gap = 1;

const carousel = document.getElementById("carousel_part"),
    content = document.getElementById("carousel_content"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");

let width = carousel.offsetWidth;

next.addEventListener("click", e => {
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
        prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "none";
    }
});
prev.addEventListener("click", e => {
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
        prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "flex";
    }
});
window.addEventListener("resize", e => (width = carousel.offsetWidth));