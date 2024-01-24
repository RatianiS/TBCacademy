
//questions show
document.addEventListener("DOMContentLoaded", function () {
    const divs = document.querySelectorAll(".questions-container > div");
    const hiddenParagraphs = document.querySelectorAll(".questions-container > p");

    divs.forEach((div, index) => {
        let isExpanded = false;

        div.addEventListener("click", function () {
            hiddenParagraphs[index].classList.toggle("show");

            const img = div.querySelector("img");
            img.src = isExpanded ? "./assets/downarrow.png" : "./assets/uparrow.png";

            isExpanded = !isExpanded;
        });
    });
});