document.addEventListener("DOMContentLoaded", () => {
  const animatedElement = document.querySelector("img");
  setTimeout(() => {
    animatedElement.classList.add("gif");
  }, 2000);
  setTimeout(() => {
    document.querySelector(".inner").classList.add("inner-hide");
  }, 3400);
  setTimeout(() => {
    document.querySelector(".sec-gif").classList.add("gif-hid");
  }, 5400);
  setTimeout(() => {
    document.querySelector(".qa").classList.add("title");
  }, 4400);
  setTimeout(() => {
    document.querySelector(".yes").classList.add("yes-hide");
  }, 6400);
  setTimeout(() => {
    document.querySelector(".no").classList.add("no-hide");
  }, 7400);
});
let clickCount = 0;
const maxClicks = 5;
document.querySelector(".no").onclick = () => {
  if (clickCount < maxClicks) {
    clickCount++;
    let yes = document.querySelector(".yes");
    const currentWidth = parseInt(window.getComputedStyle(yes).width);
    const currentHeight = parseInt(window.getComputedStyle(yes).height);
    yes.style.width = currentWidth + 100 + "px";
    yes.style.height = currentHeight + 60 + "px";
    yes.style.transition = ".5s"
    if(clickCount === 4){
        document.querySelector(".no").style.display = "none"
        yes.style.marginLeft = "50px"
    }
  }
};
