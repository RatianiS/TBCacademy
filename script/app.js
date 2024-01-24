//Header
document.addEventListener("scroll", function () {
    let header = document.getElementById("header");
    let scrollThreshold = 5;

    if (window.scrollY > scrollThreshold) {
        header.style.opacity = "0.9";
    } else {
        header.style.opacity = "1";
    }
});

//slide header up/down "mobile"
let header = document.getElementById("header");
let prevScrollPos = window.pageYOffset;
let isScrollingDown = false;

function handleScroll() {
    let currentScrollPos = window.pageYOffset;
    isScrollingDown = currentScrollPos > prevScrollPos;

    if (window.innerWidth < 767) {
        if (isScrollingDown && currentScrollPos > 0) {
            header.style.transform = "translateY(-" + header.clientHeight + "px)";
        } else {
            header.style.transform = "translateY(0)";
        }
    } else {
        header.style.transform = "translateY(0)";
    }

    prevScrollPos = currentScrollPos;
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);

window.addEventListener("scroll", function () {
    if (window.innerWidth < 767) {
        if (window.scrollY === 0) {
            header.style.transform = "translateY(0)";
        }
    }
});
