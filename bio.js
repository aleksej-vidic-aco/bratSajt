const menu = document.querySelectorAll("ul > li")[2];
const subMenu = document.querySelector("#sub-menu");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const sidebarMenu = document.querySelector(".sidebar-menu");
const closeBtn = document.querySelector(".close-btn");
menu.addEventListener("mouseover", () => {
    subMenu.style.display = "block";
});
menu.addEventListener("mouseleave", () => {
    subMenu.style.display = "none";
});
hamburgerMenu.addEventListener("click", () => {
    sidebarMenu.classList.add("move");
});
closeBtn.addEventListener("click", () => {
    sidebarMenu.classList.remove("move");
});