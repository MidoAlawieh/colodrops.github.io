let navToggle = document.querySelector(".toggle");
let mobileNav = document.querySelector(".mobile-nav");
let closeToggle = document.querySelector(".mobile-close");
let overlay = document.querySelector(".overlay");

console.log(closeToggle);

navToggle.addEventListener("click", () => {
  mobileNav.classList.add("mobile-open");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
});
overlay.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-open");
  overlay.classList.remove("show");
  document.body.style.overflow = "auto";
});
closeToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-open");
  overlay.classList.remove("show");
  document.body.style.overflow = "auto";
});

let gojo = document.createElement("p");

let i = 1;
while (i <= 100) {
  gojo.innerText = `${i}. Gojo`;
  document.body.appendChild(gojo);
}
