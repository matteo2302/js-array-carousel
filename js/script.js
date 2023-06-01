console.log("JSOK");
/*********************************************fase 0**********************************/
let count = [0];
const image = document.querySelectorAll("img");
const arrowDown = document.querySelector(".fa-chevron-down");
const arrowUp = document.querySelector(".fa-chevron-up");
image[count].classList.add("active");
/*********************************************fase 1**********************************/
//listener up
arrowDown.addEventListener("click", function () {
  image[count].classList.remove("active");
  image[count++];
  image[count].classList.add("active");
});
//listener down
arrowUp.addEventListener("click", function () {
  image[count].classList.remove("active");
  image[count--];
  image[count].classList.add("active");
});
