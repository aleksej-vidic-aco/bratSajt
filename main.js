const arts = ["alpha+homepage+banner.jpg", "teaching.jpg", "podcaster.jpg"];
let counter = 0;
const body = document.querySelector("body");
const moveBefore = document.querySelector(".move-before");
const moveAfter = document.querySelector(".move-after");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
prev.addEventListener("click", previousArt);
moveBefore.addEventListener("click", previousArt);
next.addEventListener("click", nextArt);
moveAfter.addEventListener("click", nextArt);
function previousArt(e) {
    e.stopPropagation();
    if(counter === 0) counter = arts.length - 1;
    else counter--;
    body.style.backgroundImage = `url(${arts[counter]})`;
}
function nextArt(e) {
    e.stopPropagation();
    if(counter === arts.length - 1) counter = 0;
    else counter++;
    body.style.backgroundImage = `url(${arts[counter]})`;
}