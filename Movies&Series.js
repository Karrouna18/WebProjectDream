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
        img: "imgs/images.jpg", cast: ["John Doe", "Jane Smith", "Max Power"]
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
    { id: 1, title: "تحت سابع أرض",  description: "تحت سابع أرض هو مسلسل درامي مليء بالأحداث المثيرة التي تدور في أعماق الأرض. تتبع القصة مجموعة من الأشخاص الذين يجدون أنفسهم عالقين في مكان غريب ومظلم، حيث تبدأ المغامرات والتحديات التي تواجههم. يتميز هذا العمل بالتشويق والترقب، مع تفاصيل مثيرة ستجعلك تتابع الأحداث بشغف.", genre: "Family", year: 2025,rating:"8.5/10", img: "imgs/TahtSabehAred.jpeg",  cast: ["أحمد السقا", "منى زكي", "محمود عبد المغني"] },
    { id: 2, title: "معاوية", description: "مسلسل معاوية هو عمل درامي تاريخي يعرض قصة حياة الصحابي معاوية بن أبي سفيان، ويأخذك عبر أحداث تاريخية مهمة وتحديات كبيرة في فترة خلافته. ينقلك العمل عبر الأحداث المليئة بالدراما والتشويق، مع تقديم العديد من اللحظات المؤثرة في حياة الشخصية.", genre: "Action", year: 2024, rating:"9.0/10", img: "imgs/Moawiya.jpg",  cast: ["تيم حسن", "كاريس بشار", "سلاف فواخرجي"] // Key Arabic cast
    }, 
    { id: 3, title: "البطل",  description: "البطل هو مسلسل درامي يشهد ظهور شخصية رئيسية تخوض مغامرات مليئة بالتحديات. يروي المسلسل قصة بطل خارق يتعرض لاختبارات صعبة في حياته. القصة مليئة بالإثارة والتشويق، وتركز على جوانب القوة الداخلية للشخصية وكيفية التعامل مع الأزمات.", genre: "Drama", year: 2023, rating:"7.8/10" ,img: "imgs/AlBatal.jpg",  cast: ["أحمد مكي", "دينا الشربيني", "أحمد داوود"] // Key Arabic cast
    }, 
    { id: 4, title: "تحت الأرض",  description: "قصة غامضة عن مجموعة تبحث عن الحقيقة في عالم خفي.", genre: "Sci-Fi", year: 2024, rating:"8.0/10" ,img: "imgs/TahetAlAred.jpg", },
    { id: 5, title: "بالدم", description: "Laugh-out-loud comedy film.", genre: "Comedy", year: 2023, img: "imgs/Bldam.jpg" },
    { id: 6, title: "فهد البطل", description: "Spine-chilling thriller.", genre: "Horror", year: 2025, img: "imgs/FahedAlBatal.jpg", cast: ["عمرو يوسف", "غادة عبد الرازق", "أحمد زاهر"] },
    { id: 7, title: "نص الشعب اسمه محمد", description: "A special movie for Ramadan.", genre: "Family", year: 2025, img: "imgs/NosALShaab.jpg" },
    { id: 8, title: "ولاد شمس", description: "High-octane action movie.", genre: "Action", year: 2024, img: "imgs/WladShames.jpg" },
    { id: 9, title: "بيت حموله", description: "Emotional drama movie.", genre: "Drama", year: 2023, img: "imgs/BetHmouleh.jpg" },
    { id: 10, title: "يوميات رجل عانس", description: "An intergalactic adventure.", genre: "Sci-Fi", year: 2024, img: "imgs/YawmeyatRajolAanes.jpg" },
    { id: 11, title: "السيع ابن الجبل", description: "Laugh-out-loud comedy film.", genre: "Comedy", year: 2023, img: "imgs/AlSabihAbnlJabal.jpg" },
    { id: 12, title: "رامز ايلون ماسك", description: "Spine-chilling thriller.", genre: "Horror", year: 2025, img: "imgs/RamezElonMasr.jpg" }
];

// Function to hide all sections (except the carousel)
// Function to hide all sections (except search results)
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

    let footer = document.querySelector('.custom-footer');
    if (footer) {
        footer.style.display = 'none';
    }
}

// Function to display search results (handles both title and year filtering)
function displaySearchResults() {
    const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
    const yearFilter = document.getElementById('yearFilter').value.trim();
    const searchResultsContainer = document.getElementById('movieResults');
    searchResultsContainer.innerHTML = ''; // Clear previous results

    // If both inputs are empty, restore everything
    if (searchQuery === '' && yearFilter === '') {
        searchResultsContainer.style.display = 'none'; // Hide search results

        let sections = document.querySelectorAll('.movies-section');
        sections.forEach(section => {
            section.style.display = 'block'; // Show all sections again
        });

        let carousels = document.querySelectorAll('.carousel-container');
        carousels.forEach(carousel => {
            carousel.style.display = 'flex'; // Show carousel sections
        });

        let carouselDots = document.querySelector('.carousel-dots');
        if (carouselDots) {
            carouselDots.style.display = 'flex'; // Show the carousel dots
        }

        let footer = document.querySelector('.custom-footer');
        if (footer) {
            footer.style.display = 'block'; // Show footer
        }

        return;
    }

    // Hide everything when filtering
    hideSections();

    // Filter movies based on the query and/or year
    let filteredMovies = movies.filter(movie => {
        let matchesTitle = searchQuery ? movie.title.toLowerCase().includes(searchQuery) : true;
        let matchesYear = yearFilter ? (movie.year && movie.year == yearFilter) : true;
        return matchesTitle && matchesYear;
    });

    if (filteredMovies.length > 0) {
        filteredMovies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${movie.img}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p>${movie.description}</p>
                <p><strong>Year:</strong> ${movie.year}</p>
            `;
            searchResultsContainer.appendChild(movieElement);
        });
        searchResultsContainer.style.display = 'flex'; // Show search results
    } else {
        searchResultsContainer.innerHTML = "<p>No results found</p>";
        searchResultsContainer.style.display = 'block';
    }
}

// Event listeners for search and filtering
document.getElementById('searchBtn').addEventListener('click', displaySearchResults);
document.getElementById('filterBtn').addEventListener('click', displaySearchResults);
document.getElementById('searchInput').addEventListener('input', displaySearchResults);
document.getElementById('yearFilter').addEventListener('input', displaySearchResults);


// Hard-coded star data
let stars = [
    {
        name: "Leonardo Dicaprio",
        description: "An Academy Award-winning actor known for his roles in Titanic, Inception, and The Revenant.",
        movies: ["Titanic", "Inception", "The Revenant", "Shutter Island"],
        img: "imgs/LeonardoDicaprio.jpg"
    },
    {
        name: "Jason Statham",
        description: "A British actor known for his action-packed roles in The Transporter, Fast & Furious, and The Expendables.",
        movies: ["The Transporter", "Fast & Furious", "The Expendables", "Wrath of Man"],
        img: "imgs/JasonStatham.jpg"
    },
    {
        name: "Shah Rhukh Khan",
        description: "A Bollywood superstar known as 'King Khan,' famous for films like Dilwale, Raees, and My Name Is Khan.",
        movies: ["Dilwale", "Raees", "My Name Is Khan", "Pathaan"],
        img: "imgs/ShahRukhKhan.jpg"
    },
    {
        name: "Margot Robbie",
        description: "An Australian actress known for her roles in The Wolf of Wall Street, Suicide Squad, and Barbie.",
        movies: ["The Wolf of Wall Street", "Suicide Squad", "Barbie", "I, Tonya"],
        img: "imgs/MargotRobbie.jpg"
    },
    {
        name: "Scarlett Johansson",
        description: "An American actress known for playing Black Widow in the Marvel Cinematic Universe.",
        movies: ["Black Widow", "Lucy", "Marriage Story", "Lost in Translation"],
        img: "imgs/ScarlettJohansson.jpg"
    }
];




//Movie POP UP
// Select the movie modal and elements inside it
const movieModal = document.getElementById("movieModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalYear = document.getElementById("modalYear");
const modalGenre = document.getElementById("modalGenre");
const modalRating = document.getElementById("modalRating");
const modalCast = document.getElementById("modalCast");
const modalImage = document.getElementById("modalImage");
const closeMovieModal = document.querySelector(".close-movie");
const ratingStars = document.querySelectorAll(".rating-star");
const userReviewInput = document.getElementById("userReview");
const submitReviewBtn = document.getElementById("submitReview");

// Select the star modal and elements inside it
const starsModal = document.getElementById("starsModal");
const starImage = document.getElementById("starImage");
const starName = document.getElementById("starName");
const starDescription = document.getElementById("starDescription");
const starMovies = document.getElementById("starMovies");
const closeStarModal = document.getElementById("closeStarModal");
// Function to close all modals before opening a new one
function closeAllModals() {
    movieModal.style.display = "none";
    starsModal.style.display = "none";
}

// Movie Modal Logic (only triggers for movie clicks)
document.querySelectorAll(".movie-card").forEach((card) => {
    card.addEventListener("click", (event) => {
        if (event.target.classList.contains("star")) {
            return; // Prevent triggering the movie modal if a star was clicked
        }

        event.stopPropagation(); // Prevent event bubbling
        closeAllModals(); // Close any open modal first

        const cardImageSrc = card.querySelector("img")?.src.trim();
        const cardTitle = card.querySelector("p.movie-title")?.textContent.trim();
        const cardDescription = card.querySelector("p.movie-description")?.textContent.trim();

        const movie = movies.find(m => 
            (m.img && cardImageSrc.includes(m.img)) ||
            (m.title && cardTitle === m.title) ||
            (m.description && cardDescription === m.description)
        );

        if (movie) {
            modalImage.src = movie.img;
            modalTitle.textContent = movie.title;
            modalDescription.textContent = movie.description || "No description available.";
            modalYear.textContent = movie.year || "N/A";
            modalRating.textContent = movie.rating || "N/A";
        } else {
            modalImage.src = cardImageSrc || "default-image.jpg";
            modalTitle.textContent = cardTitle || "Unknown Title";
            modalDescription.textContent = cardDescription || "No description available.";
            modalYear.textContent = card.querySelector("p.movie-year")?.textContent.trim() || "N/A";
            modalRating.textContent = card.querySelector("p.movie-rating")?.textContent.trim() || "N/A";
        }

        movieModal.style.display = "block"; // Show movie modal
    });
});

// Stars Modal Logic (only triggers when clicking a star)
// Stars Modal Logic
document.querySelectorAll(".star-card").forEach((card) => {
    card.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent event conflicts

        const starTitle = card.querySelector("p")?.textContent.trim();

        const star = stars.find(s => s.name.trim().toLowerCase() === starTitle.toLowerCase());

        if (star) {
            starImage.src = star.img;
            starName.textContent = star.name;
            starDescription.textContent = star.description || "No description available.";
            
            // Populate movies list
            starMovies.innerHTML = "";
            if (star.movies && star.movies.length > 0) {
                star.movies.forEach(movie => {
                    let li = document.createElement("li");
                    li.textContent = movie;
                    starMovies.appendChild(li);
                });
            } else {
                let li = document.createElement("li");
                li.textContent = "No movies listed.";
                starMovies.appendChild(li);
            }

            starsModal.style.display = "block"; // Show stars modal
        } else {
            console.error("Star not found:", starTitle);
        }
    });
}); 

// Close movie modal
closeMovieModal.addEventListener("click", () => {
    movieModal.style.display = "none";
});

// Close stars modal
closeStarModal.addEventListener("click", () => {
    starsModal.style.display = "none";
});

// Close modals when clicking outside
window.addEventListener("click", (event) => {
    if (event.target === movieModal) {
        movieModal.style.display = "none";
    }
    if (event.target === starsModal) {
        starsModal.style.display = "none";
    }
});


// Store ratings and reviews per movie
let movieReviews = JSON.parse(localStorage.getItem("movieReviews")) || {};

// Function to open the movie modal and update movie details
function openMovieModal(movie) {
    modalTitle.textContent = movie.title;
    modalDescription.textContent = movie.description;
    modalGenre.textContent = movie.genre;
    modalYear.textContent = movie.year;
    modalCast.textContent = movie.cast.join(", ");
    modalImage.src = movie.image;

    let savedReview = movieReviews[movie.title] || { rating: 0, review: "" };
    updateStarRating(savedReview.rating);
    userReviewInput.value = savedReview.review;

    movieModal.style.display = "block";
}

// Function to update star colors
function updateStarRating(value) {
    ratingStars.forEach((star, index) => {
        star.style.color = index < value ? "gold" : "gray";
    });
    modalRating.textContent = value ? `${value}/5` : "No rating";
}

// Event listener for star clicks
ratingStars.forEach(star => {
    star.addEventListener("click", function () {
        let ratingValue = parseInt(this.dataset.value);
        movieReviews[modalTitle.textContent] = movieReviews[modalTitle.textContent] || {};
        movieReviews[modalTitle.textContent].rating = ratingValue;
        updateStarRating(ratingValue);
    });
});

// Review submission logic
submitReviewBtn.addEventListener("click", function () {
    let rating = movieReviews[modalTitle.textContent]?.rating || 0;
    let reviewText = userReviewInput.value.trim();
    
    if (!rating || !reviewText) {
        alert("Please enter a rating and a review.");
        return;
    }

    movieReviews[modalTitle.textContent] = { rating, review: reviewText };
    localStorage.setItem("movieReviews", JSON.stringify(movieReviews));
    
    alert("Thank you for your review!");
    userReviewInput.value = "";
    updateStarRating(0);
});

// Close movie modal
closeMovieModal.addEventListener("click", () => {
    movieModal.style.display = "none";
});
