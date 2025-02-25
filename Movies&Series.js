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
let movieContainer = document.getElementById('movieContainer');
let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');

// Initially, hide the left button and show the right button
window.onload = handleScroll;

function scrollLeft() {
    movieContainer.scrollBy({ left: -300, behavior: 'smooth' });
    handleScroll(); // Update button visibility after scroll
}

function scrollRight() {
    movieContainer.scrollBy({ left: 300, behavior: 'smooth' });
    handleScroll(); // Update button visibility after scroll
}

function handleScroll() {
    const maxScrollLeft = movieContainer.scrollWidth - movieContainer.clientWidth;

    // Show left button if scrolled right
    leftBtn.style.display = movieContainer.scrollLeft > 0 ? 'flex' : 'none';

    // Show right button if not scrolled to the end
    rightBtn.style.display = movieContainer.scrollLeft < maxScrollLeft ? 'flex' : 'none';
}