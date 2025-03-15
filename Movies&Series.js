document.addEventListener("DOMContentLoaded", function () {
    const categoriesBtn = document.getElementById("categoriesBtn");
    const subMenu = document.querySelector(".categories .sub-menu");

    categoriesBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        subMenu.classList.toggle("show"); // Toggle visibility
    });

    // Optional: Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!categoriesBtn.contains(event.target) && !subMenu.contains(event.target)) {
            subMenu.classList.remove("show");
        }
    });
});


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
document.querySelectorAll(".movie-carousel").forEach((carousel) => {
    let moviesWrapper = carousel.querySelector(".movie-container"); // Select the container within this carousel
    let btnLeft = carousel.querySelector(".left-btn"); // Select the left button within this carousel
    let btnRight = carousel.querySelector(".right-btn"); // Select the right button within this carousel
    let scrollAmount = 1080; // Amount to scroll in pixels

    if (moviesWrapper) {
        // Ensure first image is fully visible on load
        moviesWrapper.scrollLeft = 0;
        handleScroll(moviesWrapper, btnLeft, btnRight);

        // Scroll Right
        btnRight.addEventListener("click", function () {
            moviesWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
            setTimeout(() => handleScroll(moviesWrapper, btnLeft, btnRight), 1100);
        });

        // Scroll Left
        btnLeft.addEventListener("click", function () {
            moviesWrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            setTimeout(() => handleScroll(moviesWrapper, btnLeft, btnRight), 1100);
        });

        // Add event listener to monitor scroll changes
        moviesWrapper.addEventListener("scroll", () => handleScroll(moviesWrapper, btnLeft, btnRight));
    }
});

// Move `handleScroll()` outside so it can be globally accessible
function handleScroll(container, leftBtn, rightBtn) {
    if (!container) return;

    // Hide left button if at the start
    leftBtn.style.display = container.scrollLeft <= 0 ? "none" : "block";

    // Hide right button if at the end
    rightBtn.style.display =
        container.scrollLeft + container.clientWidth >= container.scrollWidth - 1
            ? "none"
            : "block";
}

// Hard-coded movie data
let movies = [ 
    {
        title: "Buried Hearts",
        description: "This is the description of Movie 1.",
        img: "imgs/images.jpg",
    },
    {
        title: "Study Group",
        description: "This is the description of Movie 2.",
        img: "imgs/Study_Group.png",
    },
    {
        title: "My fault London",
        description: "This is the description of Movie 3.",
        img: "imgs/myfault London.jpg",
    },
    { id: 1, title: "تحت سابع أرض", description: "A special movie for Ramadan.", genre: "Family", year: 2025, img: "imgs/TahtSabehAred.jpeg" },
    { id: 2, title: "معاوية", description: "High-octane action movie.", genre: "Action", year: 2024, img: "imgs/Moawiya.jpg" },
    { id: 3, title: "البطل", description: "Emotional drama movie.", genre: "Drama", year: 2023, img: "imgs/AlBatal.jpg" },
    { id: 4, title: "تحت الأرض", description: "An intergalactic adventure.", genre: "Sci-Fi", year: 2024, img: "imgs/TahetAlAred.jpg" },
    { id: 5, title: "بالدم", description: "Laugh-out-loud comedy film.", genre: "Comedy", year: 2023, img: "imgs/Bldam.jpg" },
    { id: 6, title: "فهد البطل", description: "Spine-chilling thriller.", genre: "Horror", year: 2025, img: "imgs/FahedAlBatal.jpg" },
    { id: 7, title: "نص الشعب اسمه محمد", description: "A special movie for Ramadan.", genre: "Family", year: 2025, img: "imgs/NosALShaab.jpg" },
    { id: 8, title: "ولاد شمس", description: "High-octane action movie.", genre: "Action", year: 2024, img: "imgs/WladShames.jpg" },
    { id: 9, title: "بيت حموله", description: "Emotional drama movie.", genre: "Drama", year: 2023, img: "imgs/BetHmouleh.jpg" },
    { id: 10, title: "يوميات رجل عانس", description: "An intergalactic adventure.", genre: "Sci-Fi", year: 2024, img: "imgs/YawmeyatRajolAanes.jpg" },
    { id: 11, title: "السيع ابن الجبل", description: "Laugh-out-loud comedy film.", genre: "Comedy", year: 2023, img: "imgs/AlSabihAbnlJabal.jpg" },
    { id: 12, title: "رامز ايلون ماسك", description: "Spine-chilling thriller.", genre: "Horror", year: 2025, img: "imgs/RamezElonMasr.jpg" }
];

// Function to hide all sections (except the carousel)
function hideSections() {
    let sections = document.querySelectorAll('.movies-section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });

    let carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => {
        carousel.style.display = 'none'; // Hide all carousel sections
    });

    // Hide the carousel dots when the search is active
    let carouselDots = document.querySelector('.carousel-dots');
    if (carouselDots) {
        carouselDots.style.display = 'none';
    }
}

// Function to display search results
function displaySearchResults(query) {
    const searchResultsContainer = document.getElementById('movieResults');
    searchResultsContainer.innerHTML = ''; // Clear previous search results

    // If the search input is empty, reset everything
    if (query.trim() === '') {
        document.getElementById('movieResults').style.display = 'none'; // Hide search results
        const sections = document.querySelectorAll('.movies-section');
        sections.forEach(section => {
            section.style.display = 'block'; // Show all sections again
        });

        // Show the carousel dots again when search is cleared
        const carouselDots = document.querySelector('.carousel-dots');
        if (carouselDots) {
            carouselDots.style.display = 'flex'; // Show the carousel dots
        }

        // Show the carousel sections again when search is cleared
        const carousels = document.querySelectorAll('.carousel-container');
        carousels.forEach(carousel => {
            carousel.style.display = 'flex'; // Show carousel sections
        });

        return;
    }

    

    // Filter movies based on the query
    let filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));

    if (filteredMovies.length > 0) {
        filteredMovies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${movie.img}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p>${movie.description}</p>
            `;
            searchResultsContainer.appendChild(movieElement);
        });
        searchResultsContainer.style.display = 'flex'; // Show the search results
    } else {
        searchResultsContainer.innerHTML = "<p>No results found</p>";
        searchResultsContainer.style.display = 'block';
    }
}


// Event listener for the search button
document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value; // Get the search query
    hideSections(); // Hide all sections
    displaySearchResults(query); // Display the filtered results
});

// Event listener for input change (optional reset when input is empty)
document.getElementById('searchInput').addEventListener('input', () => {
    const query = document.getElementById('searchInput').value;
    hideSections(); // Hide all sections
    displaySearchResults(query); // Trigger filtering when typing
});
// Get the modal
var modal = document.getElementById("movieModal");

// Get the elements to show the modal content
var modalImage = document.getElementById("modalImage");
var modalTitle = document.getElementById("modalTitle");
var modalDescription = document.getElementById("modalDescription");
var modalYear = document.getElementById("modalYear");
var modalRating = document.getElementById("modalRating");

// Get the close button element
var closeBtn = document.getElementsByClassName("close")[0];

// Add event listener for the movie cards
var movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach(function(card) {
    card.addEventListener("click", function() {
        var imgSrc = card.querySelector("img").src;
        var title = card.querySelector("p").textContent;
        var description = "This is a sample description for " + title; // Replace with actual data if available
        var year = "2025"; // Replace with actual year
        var rating = "4.5"; // Replace with actual rating
        
        // Set modal content
        modalImage.src = imgSrc;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalYear.textContent = year;
        modalRating.textContent = rating;

        // Display the modal
        modal.style.display = "block";
    });
});

// Close the modal when the user clicks on the close button
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close the modal if the user clicks outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


// Assuming movies array is already declared elsewhere in your code
// For example:
// const movies = [
//     { title: "Culpa Tuya", genre: "action", img: "imgs/Culpatuya.jpg", description: "An intense action movie.", year: 2025 },
//     { title: "Madame Web", genre: "drama", img: "imgs/Madameweb.jpg", description: "A captivating drama.", year: 2025 },
//     { title: "Argylle", genre: "action", img: "imgs/Argylle.jpg", description: "A thrilling action film.", year: 2025 },
//     { title: "Eid Celebration", genre: "family", img: "imgs/EidCelebration.jpg", description: "A heartwarming family movie.", year: 2025 },
//     { title: "Ramadan 2025 Special", genre: "drama", img: "imgs/RamadanSpecial.jpg", description: "A special Ramadan drama.", year: 2025 },
// ];

document.addEventListener('DOMContentLoaded', () => {
    const yearFilterInput = document.getElementById('yearFilter');
    const filterBtn = document.getElementById('filterBtn');
    const movieContainer = document.getElementById('movieContainer');

    // Function to hide all sections except for filtered movies
    function hideAllSections() {
        let sections = document.querySelectorAll('.movies-section');
        sections.forEach(section => {
            section.style.display = 'none'; // Hide all movie sections
        });

        let carousels = document.querySelectorAll('.carousel-container');
        carousels.forEach(carousel => {
            carousel.style.display = 'none'; // Hide carousel sections
        });

        // Hide the carousel dots when filtering is applied
        let carouselDots = document.querySelector('.carousel-dots');
        if (carouselDots) {
            carouselDots.style.display = 'none';
        }
    }

    // Function to display filtered movies based on the year
    function displayFilteredMovies(year) {
        // Filter movies based on the year input
        const filteredMovies = movies.filter(movie => movie.year == year);

        // Clear previous movies and display filtered ones
        movieContainer.innerHTML = ''; // Clear the previous movies

        if (filteredMovies.length > 0) {
            filteredMovies.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.classList.add('movie');
                movieElement.innerHTML = `
                    <img src="${movie.img}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>${movie.description}</p>
                    <p><strong>Year:</strong> ${movie.year}</p>
                `;
                movieContainer.appendChild(movieElement);
            });
            movieContainer.style.display = 'block'; // Show the filtered movies
        } else {
            movieContainer.innerHTML = "<p>No movies found for this year.</p>";
            movieContainer.style.display = 'block'; // Show the "no results" message
        }
    }

    // Event listener for the filter button to filter by year
    filterBtn.addEventListener('click', function() {
        const yearFilter = yearFilterInput.value.trim(); // Get the input year and trim whitespace
        if (yearFilter) {
            hideAllSections(); // Hide all sections first
            displayFilteredMovies(yearFilter); // Display the filtered movies
        } else {
            alert("Please enter a valid year.");
        }
    });

    // Optional: Event listener for input change (filter movies as user types)
    yearFilterInput.addEventListener('input', function() {
        const yearFilter = yearFilterInput.value.trim();
        if (yearFilter) {
            hideAllSections(); // Hide all sections
            displayFilteredMovies(yearFilter); // Display the filtered movies
        }
    });
});
