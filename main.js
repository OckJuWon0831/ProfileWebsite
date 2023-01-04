// // Used scrollTop and window scroll event 
// window.addEventListener("scroll", () => {
//     const stOriginal = 0;
//     const st = Math.floor(document.documentElement.scrollTop);
//     if (st > stOriginal && st >= navbarHeight){
//         navbar.classList.add("navbar--transparent--off");
//     } else {
//         navbar.classList.remove("navbar--transparent--off");
//     }
// });

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
    if (window.scrollY > navbarHeight){
        navbar.classList.add("navbar--transparent--off");
    } else {
        navbar.classList.remove("navbar--transparent--off");
    }
});