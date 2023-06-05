console.log("JSOK");
/*********************************************fase 0**********************************/
let count = [0];
const thumbnails = document.querySelector(".thumbnails");
const arrowDown = document.querySelector(".fa-chevron-down");
const arrowUp = document.querySelector(".fa-chevron-up");
const carrousel = document.querySelector(".carrousel");
images = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
];

/*********************************************fase 1**********************************/
//listener up
for (let i = 0; i < images.length; i++) {
  carrousel.innerHTML += `<img src="${images[i]}" alt="videogame" />`;
}
const image = document.querySelectorAll("img");
image[count].classList.add("active");
arrowDown.addEventListener("click", function () {
  image[count].classList.remove("active");
  count++;
  if (count === images.length) {
    count = 0;
  }
  image[count].classList.add("active");
});
//listener down
arrowUp.addEventListener("click", function () {
  image[count].classList.remove("active");
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  image[count].classList.add("active");
});
/*********************************************thumbnails*************************************/
for (let i = 0; i < images.length; i++) {
  thumbnails.innerHTML += `<img src="${images[i]}" alt="videogame" />`;
}
// const imagethumb = document.querySelectorAll(".thumbnails img");
// imagethumb[count].classList.add("bright");
// arrowDown.addEventListener("click", function () {
//   imagethumb[count].classList.remove("bright");
//   count++;
//   if (count === images.length) {
//     count = 0;
//   }
//   imagethumb[count].classList.add("bright");
// });
