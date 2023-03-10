const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const images = [
  "./images/101.jpg",
  "./images/102.jpg",
  "./images/103.jpg",
  "./images/104.jpg",
  "./images/105.jpg",
];

console.log(images);

prevButton.addEventListener("click", () => {});

nextButton.addEventListener("click", () => {
  images++;
});
