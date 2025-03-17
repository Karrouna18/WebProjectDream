// === MOVIE SCROLL FUNCTIONALITY ===
const moviesWrapper = document.getElementById("movieContainer");
const btnLeft = document.getElementById("leftBtn");
const btnRight = document.getElementById("rightBtn");
const scrollAmount = 710; // Amount to scroll in pixels

if (moviesWrapper) {
    // Ensure first image is fully visible on load
    moviesWrapper.scrollLeft = 0;
    handleScroll();

    // Scroll Right
    btnRight.addEventListener("click", function () {
        moviesWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setTimeout(handleScroll, 710);
    });

    // Scroll Left
    btnLeft.addEventListener("click", function () {
        moviesWrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setTimeout(handleScroll, 710);
    });

    // Add event listener to monitor scroll changes
    moviesWrapper.addEventListener("scroll", handleScroll);
}

// Move `handleScroll()` outside so it can be globally accessible
function handleScroll() {
    const container = document.getElementById("movieContainer");
    const leftBtn = document.getElementById("leftBtn");
    const rightBtn = document.getElementById("rightBtn");

    if (!container) return;

    // Hide left button if at the start
    leftBtn.style.display = container.scrollLeft <= 0 ? "none" : "block";

    // Hide right button if at the end
    rightBtn.style.display =
        container.scrollLeft + container.clientWidth >= container.scrollWidth - 1
            ? "none"
            : "block";
}
