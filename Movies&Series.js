
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
        name: "Leonardo DiCaprio",
        description: "Academy Award-winning actor known for his collaborations with Martin Scorsese and iconic roles in epic films.",
        movies: ["Titanic", "The Revenant", "Inception", "The Wolf of Wall Street"],
        img: "imgs/LeonardoDicaprio.jpg"
    },
    {
        name: "Jason Statham",
        description: "British action star famous for his tough-guy roles and martial arts skills in high-octane thrillers.",
        movies: ["The Transporter", "Fast & Furious 7", "The Expendables", "Wrath of Man"],
        img: "imgs/JasonStatham.jpg"
    },
    {
        name: "Shah Rukh Khan",
        description: "Bollywood's 'King Khan', one of India's most successful actors with over 100 films spanning three decades.",
        movies: ["Dilwale Dulhania Le Jayenge", "My Name Is Khan", "Pathaan", "Chennai Express"],
        img: "imgs/ShahRukhKhan.jpg"
    },
    {
        name: "Margot Robbie",
        description: "Australian actress and producer who gained fame for her roles in both blockbusters and indie films.",
        movies: ["The Wolf of Wall Street", "Suicide Squad", "Barbie", "I, Tonya"],
        img: "imgs/MargotRobbie.jpg"
    },
    {
        name: "Scarlett Johansson",
        description: "Highest-grossing actress of all time, known for her versatile roles and long-running Marvel character.",
        movies: ["Lost in Translation", "The Avengers", "Marriage Story", "Black Widow"],
        img: "imgs/ScarlettJohansson.jpg"
    },
    {
        name: "Aras Bulut İynemli",
        description: "Turkish actor who gained international fame for his leading role in the hit series 'Çukur'.",
        movies: ["Çukur", "Miracle in Cell No.7", "The Ottoman Lieutenant", "The Pit"],
        img: "imgs/ArasBulut.jpg"
    },
    {
        name: "Neslihan Atagül",
        description: "Award-winning Turkish actress best known for her dramatic roles in television series.",
        movies: ["Kara Sevda", "Fatih Harbiye", "Aşk Laftan Anlamaz", "20 Dakika"],
        img: "imgs/Neslihan Atagül.jpg"
    },
    {
        name: "Hrithik Roshan",
        description: "Indian superstar known for his dancing skills and roles in both action and romantic films.",
        movies: ["Kaho Naa... Pyaar Hai", "War", "Krrish", "Zindagi Na Milegi Dobara"],
        img: "imgs/HrithikRoshan.jpg"
    },
    {
        name: "Aamir Khan",
        description: "Known as 'Mr. Perfectionist' of Bollywood for his selective and impactful film choices.",
        movies: ["Lagaan", "Dangal", "3 Idiots", "PK"],
        img: "imgs/AamirKhan.jpg"
    },
    {
        name: "Denzel Washington",
        description: "Two-time Academy Award winner considered one of the greatest actors of his generation.",
        movies: ["Training Day", "Malcolm X", "The Equalizer", "Fences"],
        img: "imgs/DenzelWashington.jpg"
    },
    {
        name: "Deepika Padukone",
        description: "Highest-paid Indian actress known for her work in both Bollywood and Hollywood productions.",
        movies: ["Padmaavat", "Chennai Express", "Piku", "XXX: Return of Xander Cage"],
        img: "imgs/DeepikaPadukone.jpg"
    },
    {
        name: "Gong Yoo",
        description: "South Korean superstar known for his versatile acting in both television and film.",
        movies: ["Train to Busan", "Goblin", "The Silent Sea", "Coffee Prince"],
        img: "imgs/GongYoo.jpg"
    },
    {
        name: "Ma Dong-seok",
        description: "Korean-American actor famous for his action roles and muscular physique in Korean cinema.",
        movies: ["Train to Busan", "The Roundup", "Eternals", "The Outlaws"],
        img: "imgs/MaDong-seok.jpg"
    },
    {
        name: "Burak Özçivit",
        description: "Turkish model-turned-actor known for historical dramas and romantic lead roles.",
        movies: ["Kuruluş: Osman", "Kara Sevda", "Çalıkuşu", "The Ottoman"],
        img: "imgs/BurakÖzçivit.jpg"
    },
    {
        name: "Ryan Reynolds",
        description: "Canadian actor known for his comedic timing and portrayal of Deadpool in the Marvel universe.",
        movies: ["Deadpool", "The Proposal", "Free Guy", "Red Notice"],
        img: "imgs/RyanReynolds.jpg"
    }
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
 
 {
    id: 1,
    title: "تحت سابع أرض",
    description: "مسلسل درامي مليء بالأحداث المثيرة التي تدور في أعماق الأرض. تتبع القصة مجموعة من الأشخاص الذين يجدون أنفسهم عالقين في مكان غريب ومظلم، حيث تبدأ المغامرات والتحديات.",
    genre: "دراما تشويقية",
    year: 2025,
    rating: "8.5/10",
    img: "imgs/TahtSabehAred.jpeg",
    cast: ["أحمد السقا", "منى زكي", "محمود عبد المغني"]
},
{
    id: 2,
    title: "معاوية",
    description: "عمل درامي تاريخي يعرض قصة حياة الصحابي معاوية بن أبي سفيان، بأحداث تاريخية وتحديات كبيرة في فترة خلافته.",
    genre: "دراما تاريخية",
    year: 2024,
    rating: "9.0/10",
    img: "imgs/Moawiya.jpg",
    cast: ["تيم حسن", "كاريس بشار", "سلاف فواخرجي"]
},
{
    id: 3,
    title: "البطل",
    description: "مسلسل درامي عن بطل خارق يواجه اختبارات صعبة في حياته، مع إثارة وتشويق حول القوة الداخلية للشخصية.",
    genre: "أكشن/دراما",
    year: 2023,
    rating: "7.8/10",
    img: "imgs/AlBatal.jpg",
    cast: ["أحمد مكي", "دينا الشربيني", "أحمد داوود"]
},
{
    id: 4,
    title: "تحت الأرض",
    description: "قصة غامضة عن مجموعة تبحث عن الحقيقة في عالم خفي تحت سطح الأرض.",
    genre: "غموض/إثارة",
    year: 2024,
    rating: "8.0/10",
    img: "imgs/TahetAlAred.jpg",
    cast: ["ياسمين صبري", "أمير كرارة", "نيللي كريم"]
},
{
    id: 5,
    title: "بالدم",
    description: "فيلم تشويق عن صراع بين العائلات والانتقام، مع مشاهد أكشن مكثفة.",
    genre: "أكشن/إثارة",
    year: 2023,
    rating: "7.5/10",
    img: "imgs/Bldam.jpg",
    cast: ["محمد رمضان", "أحمد رزق", "منة شلبي"]
},
{
    id: 6,
    title: "فهد البطل",
    description: "قصة شاب عادي يتحول إلى بطل بعد سلسلة من الأحداث غير المتوقعة.",
    genre: "دراما/كوميدي",
    year: 2025,
    rating: "8.1/10",
    img: "imgs/FahedAlBatal.jpg",
    cast: ["عمرو يوسف", "غادة عبد الرازق", "أحمد زاهر"]
},
{
    id: 7,
    title: "نص الشعب اسمه محمد",
    description: "كوميديا اجتماعية تعكس حياة المواطن البسيط وتحدياته اليومية.",
    genre: "كوميديا",
    year: 2025,
    rating: "7.9/10",
    img: "imgs/NosALShaab.jpg",
    cast: ["محمد إمام", "دينا الشربيني", "محمد ثروت"]
},
{
    id: 8,
    title: "ولاد شمس",
    description: "دراما عائلية عن صراعات الإخوة في حي شعري، مليئة بالمشاعر والعنف.",
    genre: "دراما",
    year: 2024,
    rating: "8.3/10",
    img: "imgs/WladShames.jpg",
    cast: ["كرم مطاوع", "أحمد صلاح حسني", "سهر الصايغ"]
},
{
    id: 9,
    title: "بيت حموله",
    description: "كوميديا عن عائلة تعيش في منزل واحد وتواجه مواقف مضحكة يومياً.",
    genre: "كوميديا عائلية",
    year: 2023,
    rating: "7.4/10",
    img: "imgs/BetHmouleh.jpg",
    cast: ["محمد سلام", "هند صبري", "خالد الصاوي"]
},
{
    id: 10,
    title: "يوميات رجل عانس",
    description: "قصة رجل في الأربعينيات يعاني من العزوبة ويبحث عن الحب.",
    genre: "كوميديا رومانسية",
    year: 2024,
    rating: "7.7/10",
    img: "imgs/YawmeyatRajolAanes.jpg",
    cast: ["محمد فراج", "ياسمين رئيس", "أشرف عبد الباقي"]
},
{
    id: 11,
    title: "السيع ابن الجبل",
    description: "أكشن مغامرات عن صياد كنوز يواجه أخطاراً في صحراء مصر.",
    genre: "أكشن/مغامرات",
    year: 2023,
    rating: "8.2/10",
    img: "imgs/AlSabihAbnlJabal.jpg",
    cast: ["أحمد عز", "ميرنا جميل", "محمود حميدة"]
},
{
    id: 12,
    title: "رامز ايلون ماسك",
    description: "برنامج كاميرا خفية ساخر مع النجم رامز جلال في موسم جديد.",
    genre: "كوميديا",
    year: 2025,
    rating: "6.9/10",
    img: "imgs/RamezElonMasr.jpg",
    cast: ["رامز جلال"]
},
{
    id: 13,
    title: "العتاولة 2",
    description: "تتمة لفيلم الجريمة الشهير، مع صراعات بين عائلات المافيا.",
    genre: "جريمة/أكشن",
    year: 2024,
    rating: "8.4/10",
    img: "imgs/ALAatawela.jpg",
    cast: ["أحمد عز", "محمود عبد المغني", "منى زكي"]
},
{
    id: 14,
    title: "سيد الناس",
    description: "دراما دينية عن حياة النبي محمد (صلى الله عليه وسلم) بطريقة جديدة.",
    genre: "دراما تاريخية",
    year: 2025,
    rating: "9.5/10",
    img: "imgs/SayedAlNas.jpg",
    cast: ["محمود نصر", "سامر المصري", "نادين نسيب نجيم"]
},
{
    id: 15,
    title: "ما اختلفنا 2",
    description: "جزء ثان من الكوميديا العائلية عن خلافات الأخوة المضحكة.",
    genre: "كوميديا",
    year: 2023,
    rating: "7.6/10",
    img: "imgs/MaKhtlfna2.jpg",
    cast: ["محمد سعد", "هاني رمزي", "شيرين رضا"]
},
{
    id: 16,
    title: "أشغال شقة جدا",
    description: "كوميديا عن مقاولين فاشلين يحاولون تجديد شقة بطريقة كارثية.",
    genre: "كوميديا",
    year: 2024,
    rating: "7.2/10",
    img: "imgs/AshgalShaqaJidan.jpg",
    cast: ["محمد هنيدي", "بيومي فؤاد", "هالة فاخر"]
},
{
    id: 17,
    title: "جودر 2",
    description: "تتمة لمغامرات جودر في عالم الجريمة والانتقام.",
    genre: "أكشن/جريمة",
    year: 2025,
    rating: "8.7/10",
    img: "imgs/Gawdar2.jpg",
    cast: ["أحمد رزق", "نيللي كريم", "محمود حافظ"]
},
{
    id: 18,
    title: "المداح أسطورة العهد",
    description: "دراما تاريخية عن حياة المداح الشهير في العصر العباسي.",
    genre: "دراما تاريخية",
    year: 2024,
    rating: "8.9/10",
    img: "imgs/AlMadah.jpg",
    cast: ["ياسر جلال", "صباح الجزائري", "علي كريم"]
},


{
    id: 19,
    title: "Culpa Tuya",
    description: "A passionate romantic drama about love, betrayal, and second chances.",
    genre: "Romance/Drama",
    year: 2023,
    rating: "7.0/10",
    img: "imgs/Culpatuya.jpg",
    cast: ["Nicole Wallace", "Gabriel Evans", "Elena Rivera"]
},
{
    id: 20,
    title: "Madame Web",
    description: "A Marvel origin story of the clairvoyant superheroine in a thrilling adventure.",
    genre: "Superhero/Sci-Fi",
    year: 2024,
    rating: "5.8/10",
    img: "imgs/Madameweb.jpg",
    cast: ["Dakota Johnson", "Sydney Sweeney", "Isabela Merced"]
},
{
    id: 21,
    title: "Argylle",
    description: "A spy thriller with twists and humor, following a rogue agent across the globe.",
    genre: "Action/Comedy",
    year: 2024,
    rating: "6.5/10",
    img: "imgs/Argylle.jpg",
    cast: ["Henry Cavill", "Bryce Dallas Howard", "Sam Rockwell"]
},
{
    id: 22,
    title: "Lucifer",
    description: "The Devil solves crimes in Los Angeles while grappling with his identity.",
    genre: "Fantasy/Crime",
    year: 2023,
    rating: "8.1/10",
    img: "imgs/Lucifer.jpg",
    cast: ["Tom Ellis", "Lauren German", "Kevin Alejandro"]
},
{
    id: 23,
    title: "Game of Thrones",
    description: "Epic fantasy of noble families fighting for control of the Iron Throne.",
    genre: "Fantasy/Drama",
    year: 2022,
    rating: "9.3/10",
    img: "imgs/Gameofthrones.jpg",
    cast: ["Emilia Clarke", "Kit Harington", "Peter Dinklage"]
},
{
    id: 24,
    title: "Den of Thieves 2",
    description: "A high-stakes heist sequel with cops and criminals in a deadly game.",
    genre: "Action/Crime",
    year: 2024,
    rating: "6.9/10",
    img: "imgs/Denofthieves2.jpg",
    cast: ["Gerard Butler", "O'Shea Jackson Jr.", "50 Cent"]
},
{
    id: 25,
    title: "Joker 2",
    description: "The return of the iconic villain in a musical psychological thriller.",
    genre: "Psychological Thriller",
    year: 2024,
    rating: "8.8/10",
    img: "imgs/Joker2.jpg",
    cast: ["Joaquin Phoenix", "Lady Gaga", "Zazie Beetz"]
},
{
    id: 26,
    title: "Extraction 2",
    description: "A mercenary returns for another deadly mission to save a kidnapped family.",
    genre: "Action/Thriller",
    year: 2023,
    rating: "7.7/10",
    img: "imgs/Extraction2.jpg",
    cast: ["Chris Hemsworth", "Golshifteh Farahani", "Adam Bessa"]
},
{
    id: 27,
    title: "Arcane",
    description: "Animated series exploring the origins of League of Legends champions.",
    genre: "Animation/Action",
    year: 2023,
    rating: "9.4/10",
    img: "imgs/Arcane.jpg",
    cast: ["Hailee Steinfeld", "Ella Purnell", "Kevin Alejandro"]
},
{
    id: 28,
    title: "The Witcher: Sirens of the Deep",
    description: "An animated adaptation of Geralt's underwater adventures, battling mythical sirens and dark forces.",
    genre: "Animation/Fantasy",
    year: 2024,
    rating: "8.2/10",
    img: "imgs/TheWitcherSirens.jpg",
    cast: ["Doug Cockle", "Anya Chalotra", "Joey Batey"]
},
{
    id: 29,
    title: "Back in Action",
    description: "A retired spy is forced back into the field for one last mission to save his family.",
    genre: "Action/Comedy",
    year: 2024,
    rating: "6.7/10",
    img: "imgs/BackinAction.jpg",
    cast: ["Jamie Foxx", "Cameron Diaz", "Glenn Close"]
},
{
    id: 30,
    title: "The Exorcism",
    description: "A horror film about a priest confronting a demonic possession with shocking revelations.",
    genre: "Horror/Thriller",
    year: 2024,
    rating: "7.1/10",
    img: "imgs/TheExorcism.jpg",
    cast: ["Russell Crowe", "Ryan Simpkins", "Sam Worthington"]
},
{
    id: 31,
    title: "Bloodline Killer",
    description: "A detective hunts a serial killer whose crimes mirror a decades-old family curse.",
    genre: "Crime/Thriller",
    year: 2023,
    rating: "6.5/10",
    img: "imgs/BloodlineKiller.jpg",
    cast: ["Milo Ventimiglia", "Lauren German", "Aidan Gillen"]
},
{
    id: 32,
    title: "Sniper: The Last Stand",
    description: "Final installment of the Sniper series, with a veteran sniper in a deadly last mission.",
    genre: "Action/War",
    year: 2024,
    rating: "6.9/10",
    img: "imgs/SniperTheLastStand.jpg",
    cast: ["Chad Michael Collins", "Tom Berenger", "Denise Richards"]
},
{
    id: 33,
    title: "The Killer's Game",
    description: "A hitman mistakenly believes he's been poisoned and must kill his way to the antidote.",
    genre: "Action/Comedy",
    year: 2024,
    rating: "7.3/10",
    img: "imgs/TheKiller'sGame.jpg",
    cast: ["Dave Bautista", "Jason Statham", "Scarlett Johansson"]
},
{
    id: 34,
    title: "AD Vitam",
    description: "Sci-fi thriller about immortality and the dark consequences of eternal life.",
    genre: "Sci-Fi/Thriller",
    year: 2024,
    rating: "7.8/10",
    img: "imgs/AdVitam.jpg",
    cast: ["Yvan Attal", "Garance Marillier", "Niels Schneider"]
},
{
    id: 35,
    title: "Sonic the Hedgehog 3",
    description: "Sonic and friends face off against Shadow the Hedgehog in a high-speed adventure.",
    genre: "Animation/Adventure",
    year: 2024,
    rating: "8.0/10",
    img: "imgs/Sonic3.jpg",
    cast: ["Ben Schwartz", "Idris Elba", "Jim Carrey"]
},
{
    id: 36,
    title: "Sumala",
    description: "Fantasy epic about a warrior princess defending her kingdom from ancient evil.",
    genre: "Fantasy/Adventure",
    year: 2024,
    rating: "7.5/10",
    img: "imgs/Sumala.jpg",
    cast: ["Liza Soberano", "Paolo Contis", "John Arcilla"]
},
// K-Drama Series
{
    id: 37,
    title: "Mouse",
    description: "A psychological thriller about a detective hunting a serial killer with a shocking genetic secret.",
    genre: "Thriller/Mystery",
    year: 2021,
    rating: "9.1/10",
    img: "imgs/Mouse.jpg",
    cast: ["Lee Seung-gi", "Lee Hee-joon", "Park Ju-hyun"]
},
{
    id: 38,
    title: "Night in Paradise",
    description: "A crime drama about a mobster seeking revenge after his family is murdered.",
    genre: "Crime/Drama",
    year: 2020,
    rating: "7.9/10",
    img: "imgs/NightinParadise.jpg",
    cast: ["Uhm Tae-goo", "Jeon Yeo-been", "Cha Seung-won"]
},
{
    id: 39,
    title: "Newtopia",
    description: "Dystopian series where survivors rebuild society after a global catastrophe.",
    genre: "Sci-Fi/Drama",
    year: 2023,
    rating: "8.3/10",
    img: "imgs/Newtopia.jpg",
    cast: ["Kim Soo-hyun", "Bae Suzy", "Jang Ki-yong"]
},
{
    id: 40,
    title: "Offer Black Belt",
    description: "A martial arts prodigy navigates love and rivalry in a competitive dojo.",
    genre: "Action/Romance",
    year: 2022,
    rating: "8.0/10",
    img: "imgs/OfferBlackBelt.jpg",
    cast: ["Ji Chang-wook", "Kim Ji-won", "Park Seo-joon"]
},
{
    id: 41,
    title: "Parasite",
    description: "Oscar-winning film about class struggle, where a poor family infiltrates a wealthy household.",
    genre: "Thriller/Dark Comedy",
    year: 2019,
    rating: "9.5/10",
    img: "imgs/Parasite.jpg",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"]
},
{
    id: 42,
    title: "School 2017",
    description: "Teen drama about students facing bullying, corruption, and first love in a competitive high school.",
    genre: "Drama/Romance",
    year: 2017,
    rating: "7.8/10",
    img: "imgs/School2017.jpg",
    cast: ["Kim Se-jeong", "Jang Dong-yoon", "Han Joo-wan"]
},
{
    id: 43,
    title: "Steel Rain",
    description: "Political thriller about a North Korean defector and a South Korean agent preventing nuclear war.",
    genre: "Action/Thriller",
    year: 2017,
    rating: "8.4/10",
    img: "imgs/SteelRain.jpg",
    cast: ["Jung Woo-sung", "Kwak Do-won", "Kim Kap-soo"]
},
{
    id: 44,
    title: "The Drug King",
    description: "Based on true events, a smuggler rises to power in the 1970s Korean drug trade.",
    genre: "Crime/Drama",
    year: 2018,
    rating: "7.6/10",
    img: "imgs/TheDrugKing.jpg",
    cast: ["Song Kang-ho", "Jo Jung-suk", "Bae Doona"]
},
{
    id: 45,
    title: "The Trunk",
    description: "Mystery thriller about a man who discovers a locked trunk with ties to a cold case.",
    genre: "Mystery/Thriller",
    year: 2022,
    rating: "7.4/10",
    img: "imgs/TheTrunk.jpg",
    cast: ["Gong Yoo", "Park Bo-young", "Lee Dong-wook"]
},
{
    id: 46,
    title: "Unlocked",
    description: "A woman's life spirals when a stranger hacks her smartphone and exposes her secrets.",
    genre: "Thriller/Crime",
    year: 2023,
    rating: "7.2/10",
    img: "imgs/Unlocked.jpg",
    cast: ["Im Si-wan", "Chun Woo-hee", "Kim Hee-won"]
},
{
    id: 47,
    title: "Animal",
    description: "A violent action drama about a man's obsession with protecting his family, leading to a path of vengeance.",
    genre: "Action/Drama",
    year: 2023,
    rating: "7.4/10",
    img: "imgs/Animal.jpg",
    cast: ["Ranbir Kapoor", "Anil Kapoor", "Rashmika Mandanna"]
},
{
    id: 48,
    title: "Dhoom 2",
    description: "A stylish heist film with high-octane action sequences and a cat-and-mouse chase between a thief and a cop.",
    genre: "Action/Thriller",
    year: 2006,
    rating: "6.9/10",
    img: "imgs/Dhoom2.jpg",
    cast: ["Hrithik Roshan", "Abhishek Bachchan", "Aishwarya Rai"]
},
{
    id: 49,
    title: "Dilwale",
    description: "A romantic action-comedy about two estranged lovers who reunite years later amidst family conflicts.",
    genre: "Romance/Action",
    year: 2015,
    rating: "5.9/10",
    img: "imgs/Dilwale.jpg",
    cast: ["Shah Rukh Khan", "Kajol", "Varun Dhawan"]
},
{
    id: 50,
    title: "Yodha",
    description: "A high-stakes action thriller about a soldier fighting terrorists on a hijacked plane.",
    genre: "Action/Thriller",
    year: 2024,
    rating: "7.1/10",
    img: "imgs/Yodha.jpg",
    cast: ["Sidharth Malhotra", "Raashii Khanna", "Disha Patani"]
},
{
    id: 51,
    title: "War",
    description: "Two elite soldiers, once mentor and protégé, face off in a deadly game of espionage and betrayal.",
    genre: "Action/Spy",
    year: 2019,
    rating: "7.5/10",
    img: "imgs/War.jpg",
    cast: ["Hrithik Roshan", "Tiger Shroff", "Vaani Kapoor"]
},
{
    id: 52,
    title: "Aashiqui 2",
    description: "A tragic love story of a singer whose career is revived by a young protege, leading to a tumultuous relationship.",
    genre: "Romance/Drama",
    year: 2013,
    rating: "7.6/10",
    img: "imgs/Aashiqui2.jpg",
    cast: ["Aditya Roy Kapur", "Shraddha Kapoor", "Shaad Randhawa"]
},
{
    id: 53,
    title: "Bulbbul",
    description: "A Gothic horror-drama about a woman who transforms into a mythical entity to seek vengeance.",
    genre: "Horror/Drama",
    year: 2020,
    rating: "7.4/10",
    img: "imgs/Balbbul.jpg",
    cast: ["Tripti Dimri", "Avanish Tiwary", "Rahul Bose"]
},
{
    id: 54,
    title: "Crew",
    description: "A comedy-drama about three air hostesses caught in a web of lies after a smuggling operation goes wrong.",
    genre: "Comedy/Drama",
    year: 2024,
    rating: "7.8/10",
    img: "imgs/Crew.jpg",
    cast: ["Kareena Kapoor", "Tabu", "Kriti Sanon"]
},
{
    id: 55,
    title: "Fighter",
    description: "An aerial action film about Indian Air Force pilots on a mission to protect the nation.",
    genre: "Action/Patriotic",
    year: 2024,
    rating: "8.2/10",
    img: "imgs/Fighter.jpg",
    cast: ["Hrithik Roshan", "Deepika Padukone", "Anil Kapoor"]
},
{
    id: 56,
    title: "Rocky Aur Rani Kii Prem Kahaani",
    description: "A vibrant love story that bridges cultural divides between two contrasting families.",
    genre: "Romance/Comedy",
    year: 2023,
    rating: "8.0/10",
    img: "imgs/RockyAurRani.jpg",
    cast: ["Ranveer Singh", "Alia Bhatt", "Dharmendra"]
},
{
    id: 57,
    title: "Jawan",
    description: "A vigilante action film about a man who fights corruption in the system.",
    genre: "Action/Thriller",
    year: 2023,
    rating: "8.5/10",
    img: "imgs/Jawan.jpg",
    cast: ["Shah Rukh Khan", "Nayanthara", "Vijay Sethupathi"]
},
{
    id: 58,
    title: "Kabir Singh",
    description: "A self-destructive surgeon spirals into alcoholism after his lover is forced to marry someone else.",
    genre: "Romance/Drama",
    year: 2019,
    rating: "7.1/10",
    img: "imgs/KabirSingh.jpg",
    cast: ["Shahid Kapoor", "Kiara Advani", "Arjan Bajwa"]
},
{
    id: 59,
    title: "Ram Setu",
    description: "An archaeologist investigates the scientific and historical validity of the ancient Ram Setu bridge.",
    genre: "Adventure/Action",
    year: 2022,
    rating: "6.8/10",
    img: "imgs/RamSetu.jpeg",
    cast: ["Akshay Kumar", "Jacqueline Fernandez", "Nushrratt Bharuccha"]
},
{
    id: 60,
    title: "Singham Again",
    description: "The third installment of the Singham franchise, with the cop taking on a powerful criminal syndicate.",
    genre: "Action/Drama",
    year: 2024,
    rating: "8.3/10",
    img: "imgs/SinghamAgain.jpg",
    cast: ["Ajay Devgn", "Kareena Kapoor", "Deepika Padukone"]
},
{
    id: 61,
    title: "Pathaan",
    description: "An exiled RAW agent returns to stop a rogue scientist from unleashing a deadly virus.",
    genre: "Action/Spy",
    year: 2023,
    rating: "8.0/10",
    img: "imgs/Pathaan.jpg",
    cast: ["Shah Rukh Khan", "Deepika Padukone", "John Abraham"]
},
{
    id: 62,
    title: "Tamasha",
    description: "A man stuck in a monotonous life reconnects with his childhood passion for storytelling.",
    genre: "Romance/Drama",
    year: 2015,
    rating: "7.3/10",
    img: "imgs/Tamasha.jpg",
    cast: ["Ranbir Kapoor", "Deepika Padukone", "Piyush Mishra"]
},
{
    id: 63,
    title: "Ek Villain",
    description: "A reformed criminal seeks vengeance after his wife is murdered by a serial killer.",
    genre: "Action/Thriller",
    year: 2014,
    rating: "7.0/10",
    img: "imgs/TheVillain.jpg",
    cast: ["Sidharth Malhotra", "Shraddha Kapoor", "Riteish Deshmukh"]
},
{
    id: 64,
    title: "Tiger 3",
    description: "RAW agent Tiger faces his toughest mission yet, entangled in a global conspiracy.",
    genre: "Action/Spy",
    year: 2023,
    rating: "7.9/10",
    img: "imgs/Tiger3.jpg",
    cast: ["Salman Khan", "Katrina Kaif", "Emraan Hashmi"]
},
{
    id: 65,
    title: "The Conjuring",
    description: "Paranormal investigators Ed and Lorraine Warren help a family terrorized by a dark presence in their farmhouse.",
    genre: "Supernatural/Horror",
    year: 2013,
    rating: "7.5/10",
    img: "imgs/TheConjuring.jpg",
    cast: ["Patrick Wilson", "Vera Farmiga", "Ron Livingston"]
},
{
    id: 66,
    title: "The Nun",
    description: "A priest and a novice uncover a unholy secret while investigating a nun's suicide in Romania.",
    genre: "Supernatural/Horror",
    year: 2018,
    rating: "5.3/10",
    img: "imgs/TheNun.jpg",
    cast: ["Taissa Farmiga", "Demián Bichir", "Jonas Bloquet"]
},
{
    id: 67,
    title: "The Ring",
    description: "A journalist investigates a cursed videotape that kills its viewers seven days after watching.",
    genre: "Psychological Horror",
    year: 2002,
    rating: "7.1/10",
    img: "imgs/TheRing.jpg",
    cast: ["Naomi Watts", "Martin Henderson", "David Dorfman"]
},
{
    id: 68,
    title: "Annabelle",
    description: "A couple is terrorized by a possessed doll after it enters their home.",
    genre: "Supernatural/Horror",
    year: 2014,
    rating: "5.4/10",
    img: "imgs/Annabelle.jpg",
    cast: ["Annabelle Wallis", "Ward Horton", "Tony Amendola"]
},
{
    id: 69,
    title: "Siccin",
    description: "A Turkish horror film about dark forces unleashed after a family moves into a new home.",
    genre: "Supernatural/Horror",
    year: 2014,
    rating: "4.8/10",
    img: "imgs/Siccin.jpg",
    cast: ["Merve Ateş", "Mücahit Koçak", "Ipek Tenolcay"]
},
{
    id: 70,
    title: "La Llorona",
    description: "A Guatemalan drama-horror blending folklore with historical trauma from the country's civil war.",
    genre: "Folklore/Horror",
    year: 2019,
    rating: "6.7/10",
    img: "imgs/LaLLorona.jpg",
    cast: ["María Mercedes Coroy", "Sabrina De La Hoz", "Margarita Kenéfic"]
},
{
    id: 71,
    title: "Eli",
    description: "A boy undergoing treatment for a rare disease discovers the clinic is hiding terrifying secrets.",
    genre: "Supernatural/Horror",
    year: 2019,
    rating: "5.8/10",
    img: "imgs/Eli.jpg",
    cast: ["Charlie Shotwell", "Kelly Reilly", "Lili Taylor"]
},
{
    id: 72,
    title: "Haunt",
    description: "A group of friends encounter extreme terror at an interactive haunted house attraction.",
    genre: "Slasher/Horror",
    year: 2019,
    rating: "6.3/10",
    img: "imgs/Haunt.jpg",
    cast: ["Katie Stevens", "Will Brittain", "Lauryn McClain"]
},
{
    id: 73,
    title: "The Grudge",
    description: "A curse born from a violent death lingers in a house, killing anyone who enters.",
    genre: "Supernatural/Horror",
    year: 2004,
    rating: "5.9/10",
    img: "imgs/TheGrudge.jpg",
    cast: ["Sarah Michelle Gellar", "Jason Behr", "William Mapother"]
},
{
    id: 74,
    title: "A Quiet Place",
    description: "A family must live in silence to avoid creatures that hunt by sound.",
    genre: "Sci-Fi/Horror",
    year: 2018,
    rating: "7.5/10",
    img: "imgs/AQuietPlace.jpg",
    cast: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"]
},
{
    id: 75,
    title: "Çukur",
    description: "A crime drama about a powerful family ruling an Istanbul neighborhood called Çukur, and their struggles against rival gangs.",
    genre: "Crime/Drama",
    year: 2017,
    rating: "8.3/10",
    img: "imgs/cukur.jpg",
    cast: ["Aras Bulut İynemli", "Erkan Kolçak Köstendil", "Perihan Savaş"]
},
{
    id: 76,
    title: "Söz",
    description: "Military drama following an elite special forces team combating terrorism in Turkey.",
    genre: "Action/Drama",
    year: 2017,
    rating: "7.9/10",
    img: "imgs/Soz.jpg",
    cast: ["Tolga Sarıtaş", "Mehmet Özgür", "Onur Tuna"]
},
{
    id: 77,
    title: "Diriliş: Ertuğrul",
    description: "Historical drama about Ertuğrul Ghazi, father of Osman I, founder of the Ottoman Empire.",
    genre: "Historical/Drama",
    year: 2014,
    rating: "8.5/10",
    img: "imgs/DirilişErtuğrul.jpg",
    cast: ["Engin Altan Düzyatan", "Esra Bilgiç", "Kaan Taşaner"]
},
{
    id: 78,
    title: "Kuruluş: Osman",
    description: "Sequel to Diriliş: Ertuğrul, following the life of Osman I, founder of the Ottoman Empire.",
    genre: "Historical/Action",
    year: 2019,
    rating: "8.4/10",
    img: "imgs/KuruluşOsman.jpg",
    cast: ["Burak Özçivit", "Yıldız Çağrı Atiksoy", "Özge Törer"]
},
{
    id: 79,
    title: "The Festival of Troubadours",
    description: "Romantic comedy about a music festival that brings together unexpected lovers.",
    genre: "Romance/Comedy",
    year: 2021,
    rating: "6.8/10",
    img: "imgs/TheFestivalofTroubadours.jpg",
    cast: ["Afra Saraçoğlu", "Mert Yazıcıoğlu", "Sıla Türkoğlu"]
},
{
    id: 80,
    title: "Miracle in Cell No.7",
    description: "Heartwarming story of a mentally disabled father wrongly imprisoned who befriends fellow inmates.",
    genre: "Drama/Family",
    year: 2019,
    rating: "8.2/10",
    img: "imgs/MiracleinCellNo7.jpg",
    cast: ["Aras Bulut İynemli", "Nisa Sofiya Aksongur", "Deniz Baysal"]
},
{
    id: 81,
    title: "Love 101",
    description: "Teen drama about a group of misfit students who band together to make their teacher fall in love.",
    genre: "Teen/Drama",
    year: 2020,
    rating: "7.5/10",
    img: "imgs/Love101.jpg",
    cast: ["Mert Yazıcıoğlu", "Kubilay Aka", "Alina Boz"]
},
{
    id: 82,
    title: "BitterSweet",
    description: "Romantic drama about a pastry chef and a food critic whose professional rivalry turns into love.",
    genre: "Romance/Drama",
    year: 2021,
    rating: "7.0/10",
    img: "imgs/Bittersoet.jpg",
    cast: ["Demet Özdemir", "Buğra Gülsoy", "Şevval Sam"]
},
{
    id: 83,
    title: "Aşk Laftan Anlamaz",
    description: "Romantic comedy about two young professionals whose business relationship turns romantic.",
    genre: "Romance/Comedy",
    year: 2016,
    rating: "7.8/10",
    img: "imgs/AşkLaftanAnlamaz.jpg",
    cast: ["Hande Erçel", "Burak Deniz", "Kaan Urgancıoğlu"]
},
{
    id: 84,
    title: "In Good Hands",
    description: "Emotional drama about a terminally ill mother searching for a loving family to adopt her son.",
    genre: "Drama/Family",
    year: 2022,
    rating: "8.1/10",
    img: "imgs/InGoodHands.jpg",
    cast: ["Çağatay Ulusoy", "Deniz Baysal", "Ozan Dolunay"]
},
{
    id: 85,
    title: "KUL",
    description: "Supernatural thriller about a man who discovers he's the last descendant of a secret lineage with special powers.",
    genre: "Fantasy/Thriller",
    year: 2023,
    rating: "7.3/10",
    img: "imgs/Kul.jpg",
    cast: ["Engin Akyürek", "Ayça Ayşin Turan", "Erkan Kolçak Köstendil"]
},
{
    id: 86,
    title: "Love Tactics",
    description: "Romantic comedy about two relationship experts who try to outsmart each other in love.",
    genre: "Romance/Comedy",
    year: 2022,
    rating: "6.9/10",
    img: "imgs/LoveTactics.jpg",
    cast: ["Demet Özdemir", "Şükrü Özyıldız", "Birce Akalay"]
},
{
    id: 87,
    title: "The Lion King",
    description: "Disney's classic about a young lion prince's journey to claim his rightful throne.",
    genre: "Musical/Adventure",
    year: 1994,
    rating: "8.5/10",
    img: "imgs/TheLionKing.jpg",
    cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"]
},
{
    id: 88,
    title: "One Piece",
    description: "Anime series following Monkey D. Luffy and his pirate crew in search of the ultimate treasure.",
    genre: "Adventure/Action",
    year: 1999,
    rating: "8.9/10",
    img: "imgs/OnePiece.jpg",
    cast: ["Mayumi Tanaka", "Kazuya Nakai", "Akemi Okamura"]
},
{
    id: 89,
    title: "Attack on Titan",
    description: "Dark anime about humanity's last stand against man-eating Titans.",
    genre: "Dark Fantasy/Action",
    year: 2013,
    rating: "9.0/10",
    img: "imgs/AttackonTitan.jpg",
    cast: ["Yuki Kaji", "Marina Inoue", "Hiro Shimono"]
},
{
    id: 90,
    title: "Death Note",
    description: "Psychological thriller about a student who gains a notebook that can kill anyone whose name is written in it.",
    genre: "Psychological Thriller",
    year: 2006,
    rating: "8.9/10",
    img: "imgs/DeathNote.jpg",
    cast: ["Mamoru Miyano", "Kappei Yamaguchi", "Aya Hirano"]
},
{
    id: 91,
    title: "Frozen",
    description: "Disney musical about a princess with ice powers and her journey to save her kingdom.",
    genre: "Musical/Fantasy",
    year: 2013,
    rating: "7.4/10",
    img: "imgs/Frozen.jpg",
    cast: ["Kristen Bell", "Idina Menzel", "Jonathan Groff"]
},
{
    id: 92,
    title: "Coco",
    description: "A boy enters the Land of the Dead to uncover his family's musical legacy.",
    genre: "Musical/Adventure",
    year: 2017,
    rating: "8.4/10",
    img: "imgs/Coco.jpg",
    cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"]
},
{
    id: 93,
    title: "Tom and Jerry",
    description: "Classic cartoon about the never-ending rivalry between a cat and mouse.",
    genre: "Comedy/Slapstick",
    year: 1940,
    rating: "7.5/10",
    img: "imgs/TomandJerry.jpg",
    cast: ["William Hanna", "Joseph Barbera"] // Voice artists
},
{
    id: 94,
    title: "Ratatouille",
    description: "A rat with culinary talents helps a young man become a chef in Paris.",
    genre: "Comedy/Family",
    year: 2007,
    rating: "8.1/10",
    img: "imgs/Ratatouille.jpg",
    cast: ["Patton Oswalt", "Lou Romano", "Brad Garrett"]
},
{
    id: 95,
    title: "Bolt",
    description: "A TV star dog embarks on a cross-country journey believing his superpowers are real.",
    genre: "Adventure/Comedy",
    year: 2008,
    rating: "6.8/10",
    img: "imgs/Bolt.jpg",
    cast: ["John Travolta", "Miley Cyrus", "Susie Essman"]
},
{
    id: 96,
    title: "Detective Conan",
    description: "Teen detective turned child solves mysteries while searching for a cure to his condition.",
    genre: "Mystery/Crime",
    year: 1996,
    rating: "8.4/10",
    img: "imgs/DetectiveConan.jpg",
    cast: ["Minami Takayama", "Wakana Yamazaki", "Rikiya Koyama"]
},
{
    id: 97,
    title: "Dragon Ball Z",
    description: "Legendary anime about Goku and friends defending Earth from powerful villains.",
    genre: "Action/Adventure",
    year: 1989,
    rating: "8.8/10",
    img: "imgs/DragonBallZ.jpg",
    cast: ["Masako Nozawa", "Ryo Horikawa", "Hiromi Tsuru"]
},
{
    id: 98,
    title: "IF",
    description: "Animated fantasy about a girl who can see everyone's imaginary friends.",
    genre: "Fantasy/Comedy",
    year: 2024,
    rating: "7.2/10",
    img: "imgs/IF.jpg",
    cast: ["Ryan Reynolds", "John Krasinski", "Cailey Fleming"]
},
{
    id: 99,
    title: "Ice Age",
    description: "Prehistoric animals band together to return a human baby to its tribe.",
    genre: "Adventure/Comedy",
    year: 2002,
    rating: "7.5/10",
    img: "imgs/IceAge.jpg",
    cast: ["Ray Romano", "John Leguizamo", "Denis Leary"]
},
{
    id: 100,
    title: "Hotel Transylvania: Transformania",
    description: "Final installment where monsters turn human and humans turn monsters.",
    genre: "Comedy/Fantasy",
    year: 2022,
    rating: "6.0/10",
    img: "imgs/HotelTransylvaniaTransformania.jpg",
    cast: ["Andy Samberg", "Selena Gomez", "Brian Hull"]
},
{
    id: 101,
    title: "Shaun the Sheep",
    description: "Stop-motion comedy about a clever sheep and his barnyard adventures.",
    genre: "Comedy/Slapstick",
    year: 2007,
    rating: "8.1/10",
    img: "imgs/ShauntheSheep.jpg",
    cast: ["Justin Fletcher", "John Sparkes", "Richard Webber"]
},
{
    id: 102,
    title: "Kung Fu Panda 4",
    description: "Po faces his greatest challenge yet as he trains a new warrior.",
    genre: "Action/Comedy",
    year: 2024,
    rating: "7.3/10",
    img: "imgs/KungFuPanda4.jpg",
    cast: ["Jack Black", "Awkwafina", "Viola Davis"]
},
{
    id: 103,
    title: "Soul",
    description: "A jazz musician's soul gets separated from his body before his big break.",
    genre: "Fantasy/Comedy",
    year: 2020,
    rating: "8.1/10",
    img: "imgs/Soul.jpg",
    cast: ["Jamie Foxx", "Tina Fey", "Graham Norton"]
},
{
    id: 104,
    title: "The Garfield Movie",
    description: "Lazy, lasagna-loving cat Garfield embarks on a wild outdoor adventure.",
    genre: "Comedy/Adventure",
    year: 2024,
    rating: "6.5/10",
    img: "imgs/TheGarfieldMovie.jpg",
    cast: ["Chris Pratt", "Samuel L. Jackson", "Hannah Waddingham"]
},
{
    id: 105,
    title: "Spellbound",
    description: "Musical fantasy about a princess who must break a spell dividing her kingdom.",
    genre: "Musical/Fantasy",
    year: 2024,
    rating: "7.8/10",
    img: "imgs/Spellbound.jpg",
    cast: ["Rachel Zegler", "Nicole Kidman", "Javier Bardem"]
}
];

document.getElementById('searchBtn').addEventListener('click', displaySearchResults);
document.getElementById('filterBtn').addEventListener('click', displaySearchResults);
document.getElementById('searchInput').addEventListener('input', displaySearchResults);
document.getElementById('yearFilter').addEventListener('input', displaySearchResults);


let movieModal = document.getElementById("movieModal");
let modalTitle = document.getElementById("modalTitle");
let modalDescription = document.getElementById("modalDescription");
let modalYear = document.getElementById("modalYear");
let modalGenre = document.getElementById("modalGenre");
let modalRating = document.getElementById("modalRating");
let modalCast = document.getElementById("modalCast");
let modalImage = document.getElementById("modalImage");
let closeMovieModal = document.querySelector(".close-movie");
let ratingStars = document.querySelectorAll(".rating-star");
let userReviewInput = document.getElementById("userReview");
let submitReviewBtn = document.getElementById("submitReview");
let watchNowBtn = document.getElementById("watchNowBtn");


let starsModal = document.getElementById("starsModal");
let starImage = document.getElementById("starImage");
let starName = document.getElementById("starName");
let starDescription = document.getElementById("starDescription");
let starMovies = document.getElementById("starMovies");
let closeStarModal = document.getElementById("closeStarModal");

function closeAllModals() {
    movieModal.style.display = "none";
    starsModal.style.display = "none";
}
let allMovies = Object.values(movies).flat(); 

document.querySelectorAll(".movie-card").forEach((card) => {
    card.addEventListener("click", (event) => {
        if (event.target.classList.contains("star")) {
            return; 
        }

        event.stopPropagation(); 
        closeAllModals(); 

        let cardImageSrc = card.querySelector("img")?.src.trim();
        let cardTitle = card.querySelector("p.movie-title")?.textContent.trim();
        let cardDescription = card.querySelector("p.movie-description")?.textContent.trim();
        let movie = allMovies.find(m => 
            (m.img && cardImageSrc.includes(m.img)) ||
            (m.title && cardTitle === m.title) ||
            (m.description && cardDescription === m.description)
        );

        if (movie) {
            modalImage.src = movie.img;
            modalTitle.textContent = movie.title;
            modalDescription.textContent = movie.description ;
            modalYear.textContent = movie.year ;
            modalRating.textContent = movie.rating ;
            modalGenre.textContent = movie.genre ;
            modalCast.textContent = movie.cast ;
        } else {
            modalImage.src = cardImageSrc || "default-image.jpg";
            modalTitle.textContent = cardTitle || "Unknown Title";
            modalDescription.textContent = cardDescription || "No description available.";
            modalYear.textContent = card.querySelector("p.movie-year")?.textContent.trim() || "N/A";
            modalRating.textContent = card.querySelector("p.movie-rating")?.textContent.trim() || "N/A";
            modalGenre.textContent = card.querySelector("p.movie-genre")?.textContent.trim() || "N/A";
            modalCast.textContent = card.querySelector("p.movie-cast")?.textContent.trim() || "N/A";
        }

        movieModal.style.display = "block"; 
    });
});



document.querySelectorAll(".star-card").forEach((card) => {
    card.addEventListener("click", (event) => {
        event.stopPropagation(); 

        let starTitle = card.querySelector("p")?.textContent.trim();

        let star = stars.find(s => s.name.trim().toLowerCase() === starTitle.toLowerCase());

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
