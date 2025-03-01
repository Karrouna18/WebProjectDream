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


//pop
var modal = document.getElementById("loginModal");
        
        
var btn = document.getElementById("loginBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault(); 
    modal.style.display = "none"; 
    alert("Log-In Successful! Redirecting to Main Page...");
    window.location.href = 'Movies&Series.html'; 
}
