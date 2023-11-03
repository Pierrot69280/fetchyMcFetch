const burgerIcon = document.getElementById("burger-icon");
const menu = document.getElementById("menu");

burgerIcon.addEventListener("click", () => {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});
