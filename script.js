// --- MENU BURGER ---
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.onclick = () => {
    navLinks.style.right = navLinks.style.right === "0px" ? "-100%" : "0";
};

// --- ANIMATION AU SCROLL ---
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 300;
        const height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
            section.style.transition = "1s";
        }
    });
});
