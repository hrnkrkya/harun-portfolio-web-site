document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  navToggle.addEventListener("click", function () {
    document.body.classList.toggle("nav__open");
  });

  document.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", function () {
      document.body.classList.remove("nav__open");
    });
  });
});

const portfolioItems = document.querySelectorAll(".portfolio__item");

const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);

const modalImage = document.createElement("img");
modal.appendChild(modalImage);

modal.addEventListener("click", () => {
  modal.classList.remove("modal--open");
});

portfolioItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const imgSrc = item.querySelector("img").src;
    modalImage.src = imgSrc;
    modal.classList.add("modal--open");
  });
});
