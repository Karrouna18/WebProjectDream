document.addEventListener("DOMContentLoaded", function () {
    let categoriesBtn = document.getElementById("categoriesBtn");
    let categoriesPopup = document.getElementById("categoriesPopup");

    // Open/Close Categories Popup
    categoriesBtn.addEventListener("click", function (e) {
        e.preventDefault();
        categoriesPopup.classList.toggle("show");
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
        if (!categoriesBtn.contains(e.target) && !categoriesPopup.contains(e.target)) {
            categoriesPopup.classList.remove("show");
        }
    });
});

// Function to toggle sub-menus
function toggleSubMenu(menuId) {
    let menu = document.getElementById(menuId);
    let parent = menu.parentElement;
    
    if (menu.style.display === "block") {
        menu.style.display = "none";
        parent.classList.remove("active");
    } else {
        document.querySelectorAll(".sub-dropdown").forEach(sub => sub.style.display = "none");
        document.querySelectorAll(".dropdown-item").forEach(item => item.classList.remove("active"));
        
        menu.style.display = "block";
        parent.classList.add("active");
    }
}

let track = document.querySelector('.carousel-track');
let slides = track ? Array.from(track.children) : [];
let dots = document.querySelectorAll('.dot');
let currentIndex = 0;

if (track) {
    // Function to move the carousel
    function moveToSlide(index) {
        track.style.transform = 'translateX(-' + (index * 100) + '%)';
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    // Add click event to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            moveToSlide(currentIndex);
        });
    });

    // Auto-slide every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(currentIndex);
    }, 3000);
}

// === MOVIE SCROLL FUNCTIONALITY ===
const moviesWrapper = document.getElementById("movieContainer");
const btnLeft = document.getElementById("leftBtn");
const btnRight = document.getElementById("rightBtn");
const scrollAmount = 300; // Amount to scroll in pixels

if (moviesWrapper) {
    // Ensure first image is fully visible on load
    moviesWrapper.scrollLeft = 0;
    handleScroll();

    // Scroll Right
    btnRight.addEventListener("click", function () {
        moviesWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setTimeout(handleScroll, 300);
    });

    // Scroll Left
    btnLeft.addEventListener("click", function () {
        moviesWrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setTimeout(handleScroll, 300);
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
