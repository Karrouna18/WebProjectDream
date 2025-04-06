// === MOVIE SCROLL FUNCTIONALITY ===
let moviesWrapper = document.getElementById("movieContainer");
let btnLeft = document.getElementById("leftBtn");
let btnRight = document.getElementById("rightBtn");
let scrollAmount = 730; // Amount to scroll in pixels

if (moviesWrapper) {
    // Ensure first image is fully visible on load
    moviesWrapper.scrollLeft = 0;
    handleScroll();

    // Scroll Right
    btnRight.addEventListener("click", function () {
        moviesWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setTimeout(handleScroll, 730);
    });

    // Scroll Left
    btnLeft.addEventListener("click", function () {
        moviesWrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setTimeout(handleScroll, 730);
    });

    // Add event listener to monitor scroll changes
    moviesWrapper.addEventListener("scroll", handleScroll);
}

// Move `handleScroll()` outside so it can be globally accessible
function handleScroll() {
    let container = document.getElementById("movieContainer");
    let leftBtn = document.getElementById("leftBtn");
    let rightBtn = document.getElementById("rightBtn");

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

//footer
let subscribeBtn = document.getElementById('subscribeBtn');
let emailInput = document.getElementById('newsletterEmail');
let messageElement = document.getElementById('message');
let form = document.getElementById('newsletter-form'); // Get the form element

// Check if the user is already subscribed
if (localStorage.getItem('subscribed') === 'true') {
  subscribeBtn.innerText = 'Subscribed';
  subscribeBtn.disabled = true; // Disable subscribe button after subscription
  emailInput.disabled = true;   // Disable email input after subscription
} else {
  // Ensure the input and button are active when page loads (in case of reloading)
  subscribeBtn.innerText = 'Subscribe';
  subscribeBtn.disabled = false;
  emailInput.disabled = false;
}

// Handle form submission instead of button click
form.addEventListener('submit', function (event) {
  event.preventDefault(); // ⛔ Prevent the page from reloading

  let email = emailInput.value.trim(); // Get the email value

  if (!email) {
    showMessage('Please enter your email', 'error');
  } else if (!isValidEmail(email)) {
    showMessage('Please enter a valid email', 'error');
  } else {
    localStorage.setItem('subscribed', 'true');
    localStorage.setItem('email', email);

    showMessage('Thank you for subscribing!', 'success');

    subscribeBtn.innerText = 'Subscribed';
    subscribeBtn.disabled = true;
    emailInput.disabled = true;

    emailInput.value = ''; // Clear input field
  }
});

// Show message under the email input
function showMessage(text, type) {
  messageElement.textContent = text;
  messageElement.classList.remove('success', 'error', 'valid');

  if (type === 'error') {
    messageElement.classList.add('error');
  } else if (type === 'success') {
    messageElement.classList.add('success');
  }

  messageElement.style.display = 'block';
  setTimeout(() => {
    messageElement.style.opacity = '1';
  }, 50);

  setTimeout(() => {
    messageElement.style.opacity = '0';
    setTimeout(() => {
      messageElement.style.display = 'none';
    }, 1000);
  }, 3000);
}

// Email validation function
function isValidEmail(email) {
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
}



//Light mode
  let toggle = document.getElementById("themeToggle");
  let body = document.body;

  // Load saved theme from localStorage
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  });

