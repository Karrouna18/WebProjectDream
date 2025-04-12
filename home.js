
let moviesWrapper = document.getElementById("movieContainer");
let btnLeft = document.getElementById("leftBtn");
let btnRight = document.getElementById("rightBtn");
let scrollAmount = 730; 

if (moviesWrapper) {
    moviesWrapper.scrollLeft = 0;
    handleScroll();

    btnRight.addEventListener("click", function () {
        moviesWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setTimeout(handleScroll, 730);
    });

    btnLeft.addEventListener("click", function () {
        moviesWrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setTimeout(handleScroll, 730);
    });

    moviesWrapper.addEventListener("scroll", handleScroll);
}

function handleScroll() {
    let container = document.getElementById("movieContainer");
    let leftBtn = document.getElementById("leftBtn");
    let rightBtn = document.getElementById("rightBtn");

    if (!container) return;

    leftBtn.style.display = container.scrollLeft <= 0 ? "none" : "block";

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


let subscribeBtn = document.getElementById('subscribeBtn');
let emailInput = document.getElementById('newsletterEmail');
let messageElement = document.getElementById('message');
let form = document.getElementById('newsletter-form'); 

if (localStorage.getItem('subscribed') === 'true') {
  subscribeBtn.innerText = 'Subscribed';
  subscribeBtn.disabled = true; 
  emailInput.disabled = true;    
} else {
  subscribeBtn.innerText = 'Subscribe';
  subscribeBtn.disabled = false;
  emailInput.disabled = false;
}

form.addEventListener('submit', function (event) {
  event.preventDefault(); 

  let email = emailInput.value.trim(); 
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

    emailInput.value = ''; 
  }
});


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

function isValidEmail(email) {
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
}



  let toggle = document.getElementById("themeToggle");
  let body = document.body;

  
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

