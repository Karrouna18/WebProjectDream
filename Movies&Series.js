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
    },
    {
        name: "Aras Bulut",
        description: "A talented Turkish actor known for his emotional depth and strong screen presence.",
        movies: ["Çukur(TV Series)","İçerde (TV Series)","Koğuştaki Mucize"],
        img: "imgs/ArasBulut.jpg"
    },
    {
        name: "Neslihan Atagül",
        description: "A popular Turkish actress known for her natural acting and beauty.",
        movies: ["Kara Sevda","Sefirin Kızı","Araf (Movie)"],
        img: "imgs/Neslihan Atagül.jpg"
    },
    {
        name: "Hrithik Roshan",
        description: "A top Bollywood actor famous for his dancing skills and versatile roles.",
        movies: ["Krrish (Movie Series)","War (Movie)","Zindagi Na Milegi Dobara (Movie)","Jodhaa Akbar (Movie)"],
        img: "imgs/Hrithik Roshan.jpg"
    },
    {
        name: "Aamir Khan",
        description: "One of Bollywood’s most respected actors and filmmakers, known for meaningful roles.",
        movies: ["3 Idiots (Movie)","Dangal (Movie)","PK (Movie),Lagaan (Movie)"],
        img: "imgs/AamirKhan.jpg"
    },
    {
        name: "Denzel Washington",
        description: "An award-winning American actor known for his powerful and intense performances.",
        movies: ["Training Day (Movie)","Man on Fire (Movie)","The Equalizer series (Movies)","Fences (Movie)"],
        img: "imgs/DenzelWashington.jpg"
    },
    {
        name: "Deepika Padukone",
        description: "A leading Bollywood actress praised for her beauty and acting range.",
        movies: ["Padmaavat (Movie)","Chennai Express (Movie)","Piku (Movie)Pathaan (Movie)"],
        img: "imgs/Deepika Padukone .jpg"
    },
    {
        name: "Gong Yoo",
        description: "A South Korean actor known internationally for his strong roles in dramas and thrillers.",
        movies: ["Train to Busan (Movie)","Goblin (Guardian: The Lonely and Great God) (TV Series)","The Silent Sea (TV Series)"],
        img: "imgs/GongYoo.jpg"
    },
    {
        name: "Ma Dong-seok",
        description: "",
        movies: [],
        img: "imgs/MaDong-seok.jpg"
    },
    {
        name: "Burak Özçivit",
        description: "A popular Turkish actor and model known for historical and romantic roles.",
        movies: ["Kuruluş: Osman (TV Series)","Kara Sevda (Endless Love) (TV Series)","Çalıkuşu (TV Series)"],
        img: "imgs/BurakÖzçivit.jpg"
    },
    {
        name: "Rayan Reynolds",
        description: "",
        movies: [],
        img: "imgs/RayanReynolds.jpg"
    },
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
const allMovies = Object.values(movies).flat(); // Flatten all movies into a single array

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

        // Find the movie in the flattened array
        const movie = allMovies.find(m => 
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
let currentMovieTitle = "";
let selectedStars = new Set(); // To track selected stars

function openMovieModal(movie) {
    currentMovieTitle = movie.title;

    modalTitle.textContent = movie.title;
    modalDescription.textContent = movie.description || "No description available.";
    modalGenre.textContent = movie.genre || "N/A";
    modalYear.textContent = movie.year || "N/A";
    modalCast.textContent = movie.cast?.join(", ") || "N/A";
    modalImage.src = movie.image || movie.img || "";

    modalRating.textContent = movie.rating || "N/A";

    const saved = movieReviews[movie.title] || { rating: 0, review: "" };

    // Set stars based on saved rating
    selectedStars = new Set();
    for (let i = 0; i < saved.rating; i++) {
        selectedStars.add(i);
    }
    updateStarUI();

    userReviewInput.value = saved.review;

    movieModal.style.display = "block";
}

// Update UI based on selectedStars Set
function updateStarUI() {
    ratingStars.forEach((star, index) => {
        star.style.color = selectedStars.has(index) ? "gold" : "gray";
    });
}

// Toggle individual stars on click
ratingStars.forEach((star, index) => {
    star.addEventListener("click", () => {
        if (selectedStars.has(index)) {
            selectedStars.delete(index);
        } else {
            selectedStars.add(index);
        }
        updateStarUI();
    });
});

// Submit button logic
submitReviewBtn.addEventListener("click", function () {
    const reviewText = userReviewInput.value.trim();
    const rating = selectedStars.size;

    if (!rating && !reviewText) {
        alert("Please enter a rating and a review.");
        return;
    } else if (!rating) {
        alert("Please enter a rating.");
        return;
    } else if (!reviewText) {
        alert("Please enter a review.");
        return;
    }

    movieReviews[currentMovieTitle] = {
        rating: rating,
        review: reviewText
    };

    localStorage.setItem("movieReviews", JSON.stringify(movieReviews));

    alert("Thank you for your review!");

    // Clear for next time
    selectedStars.clear();
    updateStarUI();
    userReviewInput.value = "";
});

// Close modal reset selectedStars and review (to avoid carry-over)
closeMovieModal.addEventListener("click", () => {
    movieModal.style.display = "none";
    selectedStars.clear();
    updateStarUI();
    userReviewInput.value = "";
});

// Optional: also clear stars when clicking outside modal
window.addEventListener("click", (event) => {
    if (event.target === movieModal) {
        movieModal.style.display = "none";
        selectedStars.clear();
        updateStarUI();
        userReviewInput.value = "";
    }
});




document.querySelectorAll('.nav-link').forEach(categoryLink => {
    categoryLink.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.textContent.trim();
        filterByCategory(category);
    });
});

function filterByCategory(category) {
    // Hide all sections first
    hideSections();
    
    const searchResultsContainer = document.getElementById('movieResults');
    searchResultsContainer.innerHTML = '';
    searchResultsContainer.style.display = 'flex';
    
    // Filter movies by category (genre)
    const filteredMovies = movies.filter(movie => {
        return movie.genre && movie.genre.toLowerCase().includes(category.toLowerCase());
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
                <p><strong>Genre:</strong> ${movie.genre}</p>
            `;
            searchResultsContainer.appendChild(movieElement);
        });
    } else {
        searchResultsContainer.innerHTML = `<p>No ${category} movies found.</p>`;
    }
    
}

// Watchlist functionality
let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

// Function to toggle movie in watchlist
function toggleWatchlist(movieId) {
    const index = watchlist.indexOf(movieId);
    if (index === -1) {
        watchlist.push(movieId);
    } else {
        watchlist.splice(index, 1);
    }
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    updateHeartIcons();
}

// Update heart icons based on watchlist
function updateHeartIcons() {
    document.querySelectorAll('.watchlist-heart').forEach(heart => {
        const movieId = heart.getAttribute('data-movie-id');
        if (watchlist.includes(movieId)) {
            heart.classList.add('active');
            heart.textContent = '❤️';
        } else {
            heart.classList.remove('active');
            heart.textContent = '🤍';
        }
    });
}

// Add event listeners to hearts
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('watchlist-heart')) {
        const movieId = e.target.getAttribute('data-movie-id');
        toggleWatchlist(movieId);
    }
});

// Initialize hearts on page load
updateHeartIcons();
// In Movies&Series.js, add this function
function loadWatchlist() {
    if (!document.querySelector('.watchlist-container')) return;
    
    const watchlistContainer = document.getElementById('watchlist-movies');
    watchlistContainer.innerHTML = '';
    
    if (watchlist.length === 0) {
        watchlistContainer.innerHTML = '<p>Your watchlist is empty. Add movies by clicking the heart icon.</p>';
        return;
    }
    
    watchlist.forEach(movieId => {
        const movie = movies.find(m => m.id == movieId);
        if (movie) {
            const movieElement = document.createElement('div');
            movieElement.classList.add('watchlist-movie');
            movieElement.innerHTML = `
                <button class="remove-from-watchlist" data-movie-id="${movie.id}">×</button>
                <img src="${movie.img}" alt="${movie.title}">
                <div class="watchlist-movie-info">
                    <h3>${movie.title}</h3>
                    <p>${movie.year} • ${movie.genre}</p>
                </div>
            `;
            watchlistContainer.appendChild(movieElement);
        }
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-from-watchlist').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const movieId = this.getAttribute('data-movie-id');
            const index = watchlist.indexOf(movieId);
            if (index !== -1) {
                watchlist.splice(index, 1);
                localStorage.setItem('watchlist', JSON.stringify(watchlist));
                loadWatchlist();
            }
        });
    });
    
    // Add click event to open movie details
    document.querySelectorAll('.watchlist-movie').forEach(card => {
        card.addEventListener('click', function() {
            const movieId = this.querySelector('button').getAttribute('data-movie-id');
            const movie = movies.find(m => m.id == movieId);
            if (movie) {
                openMovieModal(movie);
            }
        });
    });
}

// Call this on page load
document.addEventListener('DOMContentLoaded', function() {
    loadWatchlist();
});



