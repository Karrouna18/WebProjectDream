let moviesWrapper = document.getElementById('movieContainer');
let btnLeft = document.getElementById('leftBtn');
let btnRight = document.getElementById('rightBtn');

let scrollAmount = 710; // Amount to scroll in pixels

// Initial button state
handleScroll();

// Scroll Right
btnRight.addEventListener('click', () => {
    moviesWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(updateButtonVisibility, 710); // Delay to match scroll behavior
});

// Scroll Left
btnLeft.addEventListener('click', () => {
    moviesWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    setTimeout(updateButtonVisibility, 710);
});

// Update Button Visibility
function handleScroll() {
    let container = document.getElementById('movieContainer');
    let leftBtn = document.getElementById('leftBtn');
    let rightBtn = document.getElementById('rightBtn');

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
