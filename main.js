const navbar = document.querySelector("#navbar");
const navbarMenu = navbar.querySelector(".navbar__menu");
const arrowUp = document.querySelector("#arrow__up");
const arrowBtn = arrowUp.querySelector(".arrow__up__btn");
const home = document.querySelector(".home__container");
const homeContactBtn = home.querySelector(".home__contact");

// Scroll event 
window.addEventListener("scroll", () => {
    const homeHeight = home.getBoundingClientRect().height;
    const homeOpacityValue = 1-window.scrollY / homeHeight;
    home.style.opacity = homeOpacityValue;

    const navbarHeight = navbar.getBoundingClientRect().height;
    if (window.scrollY > navbarHeight){
        navbar.classList.add("navbar--transparent--off");
        arrowUp.classList.remove("hidden");
    } else {
        navbar.classList.remove("navbar--transparent--off");
        arrowUp.classList.add("hidden")
    }
});

function scrollTo(link) {
    const scrollTo = document.querySelector(`#${link}`);
    scrollTo.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function ontargetEvent(event) {
    const targetEvent = event.target;
    const link = targetEvent.dataset.link;
    if (link == null) {
        return; 
    }
    else return link;
}

navbarMenu.addEventListener("click", (event) => {
    const link = ontargetEvent(event);
    scrollTo(link);
});

homeContactBtn.addEventListener("click", () => {
    scrollTo("contact");
});

arrowBtn.addEventListener("click", () => {
    scrollTo("home");
})

// Work category events
const workCategory = document.querySelector(".work__categories");
const workProjects = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workCategory.addEventListener("click", (event) => {
    const targetEvent = event.target;
    const filter = targetEvent.dataset.filter || targetEvent.parentNode.dataset.filter
    if (filter == null) {
        return;
    }

    //Remove selection from the previous item and select the new one
    const active = document.querySelector(".category__btn.selected");
    active.classList.remove("selected");
    // Define the target event if it is from button or span
    const target = 
      event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode; 
    target.classList.add("selected");

    workProjects.classList.add("anim-out");
    // If the elements are block type, then setTimeout api must be implemented
    setTimeout( () => {
        projects.forEach((project) => {
            if (filter === "all" || filter === project.dataset.type) {
                project.classList.remove("visible");
            }
            else {project.classList.add("visible");}
        });
        workProjects.classList.remove("anim-out");
    }, 300);
});
