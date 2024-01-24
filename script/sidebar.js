// // side navbar

function toggleNavbar() {
    let container = document.querySelector(".header-atag-container");
    let isVisible = container.getAttribute("data-visible") === "true";
    let navbarBtnImg = document.querySelector(".header-navbar-btn img");

    if (isVisible) {
        container.style.height = "0";
        navbarBtnImg.src =
            "https://icon-library.com/images/hamburger-menu-icon-png-white/hamburger-menu-icon-png-white-10.jpg";
    } else {
        container.style.height = "200vh";
        navbarBtnImg.src = "./assets/x.png";
    }

    container.setAttribute("data-visible", !isVisible);
}
