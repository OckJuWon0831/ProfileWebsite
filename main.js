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
const navbarMenu = navbar.querySelector(".navbar__menu");
const home = document.querySelector("#home");
const homeContactBtn = home.querySelector(".home__contact");

window.addEventListener("scroll", () => {
    const navbarHeight = navbar.getBoundingClientRect().height;
    if (window.scrollY > navbarHeight){
        navbar.classList.add("navbar--transparent--off");
    } else {
        navbar.classList.remove("navbar--transparent--off");
    }
});

function scrollTo(link) {
    const scrollTo = document.querySelector(`#${link}`);
    scrollTo.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

navbarMenu.addEventListener("click", (event) => {
    const targetEvent = event.target;
    const link = targetEvent.dataset.link;
    if (link == null) {
        return;
    }
    scrollTo(link);
});

homeContactBtn.addEventListener("click", () => {
    scrollTo("contact");
});

