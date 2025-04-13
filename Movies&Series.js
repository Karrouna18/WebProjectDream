
document.addEventListener("DOMContentLoaded", function () {
    const categoriesBtn = document.getElementById("categoriesBtn");
    const subMenu = document.querySelector(".categories .sub-menu");

    categoriesBtn.addEventListener("click", function (event) {
        event.preventDefault(); 
        subMenu.classList.toggle("show"); 
    });

   
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
   
    function moveToSlide(index) {
        track.style.transform = 'translateX(-' + (index * 100) + '%)';
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            moveToSlide(currentIndex);
        });
    });

    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(currentIndex);
    }, 3000);
}


document.querySelectorAll(".movie-carousel").forEach((carousel) => {
    let moviesWrapper = carousel.querySelector(".movie-container"); 
    let btnLeft = carousel.querySelector(".left-btn"); 
    let btnRight = carousel.querySelector(".right-btn"); 
    let scrollAmount = 1080; 

    if (moviesWrapper) {
        moviesWrapper.scrollLeft = 0;
        handleScroll(moviesWrapper, btnLeft, btnRight);

        btnRight.addEventListener("click", function () {
            moviesWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
            setTimeout(() => handleScroll(moviesWrapper, btnLeft, btnRight), 1100);
        });

        btnLeft.addEventListener("click", function () {
            moviesWrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            setTimeout(() => handleScroll(moviesWrapper, btnLeft, btnRight), 1100);
        });

        moviesWrapper.addEventListener("scroll", () => handleScroll(moviesWrapper, btnLeft, btnRight));
    }
});

function handleScroll(container, leftBtn, rightBtn) {
    if (!container) return;

    leftBtn.style.display = container.scrollLeft <= 0 ? "none" : "block";

    rightBtn.style.display =
        container.scrollLeft + container.clientWidth >= container.scrollWidth - 1
            ? "none"
            : "block";
}



function hideSections() {
    let sections = document.querySelectorAll('.movies-section');
    sections.forEach(section => {
        section.style.display = 'none'; 
    });

    let carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => {
        carousel.style.display = 'none'; 
    });

    let carouselDots = document.querySelector('.carousel-dots');
    if (carouselDots) {
        carouselDots.style.display = 'none';
    }

    let footer = document.querySelector('.custom-footer');
    if (footer) {
        footer.style.display = 'none';
    }
}

function displaySearchResults() {
    const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
    const yearFilter = document.getElementById('yearFilter').value.trim();
    const searchResultsContainer = document.getElementById('movieResults');
    searchResultsContainer.innerHTML = ''; 

    if (searchQuery === '' && yearFilter === '') {
        searchResultsContainer.style.display = 'none'; 

        let sections = document.querySelectorAll('.movies-section');
        sections.forEach(section => {
            section.style.display = 'block'; 
        });

        let carousels = document.querySelectorAll('.carousel-container');
        carousels.forEach(carousel => {
            carousel.style.display = 'flex';
        });

        let carouselDots = document.querySelector('.carousel-dots');
        if (carouselDots) {
            carouselDots.style.display = 'flex'; 
        }

        let footer = document.querySelector('.custom-footer');
        if (footer) {
            footer.style.display = 'block'; 
        }

        return;
    }

    hideSections();

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
        searchResultsContainer.style.display = 'flex'; 
        
    } else {
        searchResultsContainer.innerHTML = "<p>No results found</p>";
        searchResultsContainer.style.display = 'block';
    }
}
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
    { id: "1", title: "تحت سابع أرض",  description: "تحت سابع أرض هو مسلسل درامي مليء بالأحداث المثيرة التي تدور في أعماق الأرض. تتبع القصة مجموعة من الأشخاص الذين يجدون أنفسهم عالقين في مكان غريب ومظلم، حيث تبدأ المغامرات والتحديات التي تواجههم. يتميز هذا العمل بالتشويق والترقب، مع تفاصيل مثيرة ستجعلك تتابع الأحداث بشغف.", genre: "Family", year: 2025,rating:"8.5/10", img: "imgs/TahtSabehAred.jpeg",  cast: ["أحمد السقا", "منى زكي", "محمود عبد المغني"] },
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

document.getElementById('searchBtn').addEventListener('click', displaySearchResults);
document.getElementById('filterBtn').addEventListener('click', displaySearchResults);
document.getElementById('searchInput').addEventListener('input', displaySearchResults);
document.getElementById('yearFilter').addEventListener('input', displaySearchResults);


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
const watchNowBtn = document.getElementById("watchNowBtn");


const starsModal = document.getElementById("starsModal");
const starImage = document.getElementById("starImage");
const starName = document.getElementById("starName");
const starDescription = document.getElementById("starDescription");
const starMovies = document.getElementById("starMovies");
const closeStarModal = document.getElementById("closeStarModal");

function closeAllModals() {
    movieModal.style.display = "none";
    starsModal.style.display = "none";
}
const allMovies = Object.values(movies).flat(); 

document.querySelectorAll(".movie-card").forEach((card) => {
    card.addEventListener("click", (event) => {
        if (event.target.classList.contains("star")) {
            return; 
        }

        event.stopPropagation(); 
        closeAllModals(); 

        const cardImageSrc = card.querySelector("img")?.src.trim();
        const cardTitle = card.querySelector("p.movie-title")?.textContent.trim();
        const cardDescription = card.querySelector("p.movie-description")?.textContent.trim();
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

        movieModal.style.display = "block"; 
    });
});



document.querySelectorAll(".star-card").forEach((card) => {
    card.addEventListener("click", (event) => {
        event.stopPropagation(); 

        const starTitle = card.querySelector("p")?.textContent.trim();

        const star = stars.find(s => s.name.trim().toLowerCase() === starTitle.toLowerCase());

        if (star) {
            starImage.src = star.img;
            starName.textContent = star.name;
            starDescription.textContent = star.description || "No description available.";
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

            starsModal.style.display = "block"; 
        } else {
            console.error("Star not found:", starTitle);
        }
    });
}); 

closeMovieModal.addEventListener("click", () => {
    movieModal.style.display = "none";
});

closeStarModal.addEventListener("click", () => {
    starsModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === movieModal) {
        movieModal.style.display = "none";
    }
    if (event.target === starsModal) {
        starsModal.style.display = "none";
    }
});

let movieReviews = JSON.parse(localStorage.getItem("movieReviews")) || {};
let currentMovieTitle = "";
let selectedStars = new Set(); 

function openMovieModal(movie) {
    currentMovieTitle = movie.title;

    modalTitle.textContent = movie.title;
    modalDescription.textContent = movie.description || "No description available.";
    modalGenre.textContent = movie.genre || "N/A";
    modalYear.textContent = movie.year || "N/A";
    modalCast.textContent = movie.cast?.join(", ") || "N/A";
    modalImage.src = movie.image || movie.img || "";

    modalRating.textContent = movie.rating || "N/A";
    updateWatchNowButton(movie.title); 
    const saved = movieReviews[movie.title] || { rating: 0, review: "" };
    selectedStars = new Set();
    for (let i = 0; i < saved.rating; i++) {
        selectedStars.add(i);
    }
    updateStarUI();

    userReviewInput.value = saved.review;

    movieModal.style.display = "block";
    
}


function updateStarUI() {
    ratingStars.forEach((star, index) => {
        star.style.color = selectedStars.has(index) ? "gold" : "gray";
    });
}


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

    selectedStars.clear();
    updateStarUI();
    userReviewInput.value = "";
});

closeMovieModal.addEventListener("click", () => {
    movieModal.style.display = "none";
    selectedStars.clear();
    updateStarUI();
    userReviewInput.value = "";
});

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
    hideSections();
    
    const searchResultsContainer = document.getElementById('movieResults');
    searchResultsContainer.innerHTML = '';
    searchResultsContainer.style.display = 'flex';
    
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
            movieElement.addEventListener('click', () => {
                openMovieModal(movie);
            });
            searchResultsContainer.appendChild(movieElement);

        });
    } else {
        searchResultsContainer.innerHTML = `<p>No ${category} movies found.</p>`;
    }
    
}

let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

function isInWatchlist(title) {
    return watchlist.some(movie => movie.title === title);
}

function updateWatchNowButton(title) {
    if (isInWatchlist(title)) {
        watchNowBtn.textContent = "✓ In Watchlist";
        watchNowBtn.classList.add("in-watchlist");
    } else {
        watchNowBtn.textContent = "+ Watch Now";
        watchNowBtn.classList.remove("in-watchlist");
    }
}

watchNowBtn.addEventListener("click", () => {
    const movieData = {
        title: modalTitle.textContent,
        img: modalImage.src,
        description: modalDescription.textContent,
        year: modalYear.textContent,
        genre: modalGenre.textContent,
        rating: modalRating.textContent,
        cast: modalCast.textContent
    };

    const index = watchlist.findIndex(m => m.title === movieData.title);

    if (index === -1) {
        watchlist.push(movieData);
    } else {
        watchlist.splice(index, 1);
    }

    localStorage.setItem("watchlist", JSON.stringify(watchlist));

    updateWatchNowButton(movieData.title);
});
