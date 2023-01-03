const navbarHeight = document.querySelector("#navbar").scrollHeight;
const navbar = document.querySelector("#navbar");

// Used scrollTop and window scroll event 
window.addEventListener("scroll", () => {
    const stOriginal = 0;
    const st = Math.floor(document.documentElement.scrollTop);
    if (st > stOriginal && st >= navbarHeight){
        navbar.style.opacity = '0.8';
    } else {
        navbar.removeAttribute("style");
    }
});