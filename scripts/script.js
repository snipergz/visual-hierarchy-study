let slideIndex = 1;
const labels = [
  "F Pattern Variation 1",
  "F Pattern Variation 2",
  "Z Pattern Variation 1",
  "Z Pattern Variation 2",
  "Z Pattern Variation 3",
];
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");
  let labelElement = document.querySelector(".slide-label");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  labelElement.textContent = labels[slideIndex - 1];
}
