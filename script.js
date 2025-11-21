// Menu Burger (mobile)
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
    if (navLinks.style.right === "0px") {
        navLinks.style.right = "-100%";
    } else {
        navLinks.style.right = "0";
    }
});

// Animation simple au scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 300;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        } else {
            sec.style.opacity = 0;
            sec.style.transform = "translateY(40px)";
        }
    });
});
