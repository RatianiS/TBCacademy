//partners section . scroll
document.addEventListener("DOMContentLoaded", function () {
    let scrollContainer = document.getElementById("scrollContainer");
    let backbtn = document.getElementById("backbtn");
    let nextbtn = document.getElementById("nextbtn");

    let currentContainerIndex = 0;

    nextbtn.addEventListener("click", () => {
        currentContainerIndex = (currentContainerIndex + 1) % 3;
        scrollToContainer(currentContainerIndex);
    });

    backbtn.addEventListener("click", () => {
        currentContainerIndex = (currentContainerIndex - 1 + 3) % 3;
        scrollToContainer(currentContainerIndex);
    });

    function scrollToContainer(index) {
        const containerWidth = scrollContainer.offsetWidth;
        const targetScrollLeft = index * containerWidth;

        scrollContainer.scrollLeft = targetScrollLeft;

        highlightContainer();
    }

    function highlightContainer() {
        const containers = document.querySelectorAll(".partners-img-container");

        containers.forEach((container, index) => {
            if (index === currentContainerIndex) {
                container.classList.add("highlight");
            } else {
                container.classList.remove("highlight");
            }
        });
    }

    setInterval(() => {
        currentContainerIndex = (currentContainerIndex + 1) % 3;
        scrollToContainer(currentContainerIndex);
    }, 5000);

    highlightContainer();
});
