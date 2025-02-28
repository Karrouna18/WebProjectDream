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
let slides = Array.from(track.children);
let dots = document.querySelectorAll('.dot');
let currentIndex = 0;

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



    


//scroll
const moviesWrapper = document.getElementById('movieContainer');
const btnLeft = document.getElementById('leftBtn');
const btnRight = document.getElementById('rightBtn');

const scrollAmount = 300; // Amount to scroll in pixels

// Initial button state
handleScroll();

// Scroll Right
btnRight.addEventListener('click', () => {
    moviesWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(updateButtonVisibility, 300); // Delay to match scroll behavior
});

// Scroll Left
btnLeft.addEventListener('click', () => {
    moviesWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    setTimeout(updateButtonVisibility, 300);
});

// Update Button Visibility
function handleScroll() {
    const container = document.getElementById('movieContainer');
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');

    // Hide left button if at the start
    if (container.scrollLeft <= 0) {
        leftBtn.style.display = 'none';
    } else {
        leftBtn.style.display = 'block';
    }

    // Hide right button if at the end
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        rightBtn.style.display = 'none';
    } else {
        rightBtn.style.display = 'block';
    }
}

// Initial check for button visibility
handleScroll();

// Add scroll event listener to the container
document.getElementById('movieContainer').addEventListener('scroll', handleScroll);











 

