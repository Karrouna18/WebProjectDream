let movieContainer = document.getElementById('movieContainer');
let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');


function scrollLeft() {
    movieContainer.scrollBy({ left: -710, behavior: 'smooth' });
}
function scrollRight() {
    movieContainer.scrollBy({ left: 710, behavior: 'smooth' });
}

function handleScroll() {
    const maxScrollLeft = movieContainer.scrollWidth - movieContainer.clientWidth;
    leftBtn.style.display = movieContainer.scrollLeft > 0 ? 'flex' : 'none';
    rightBtn.style.display = movieContainer.scrollLeft < maxScrollLeft ? 'flex' : 'none';
}

window.onload = handleScroll;

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
