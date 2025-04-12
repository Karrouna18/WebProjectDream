document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".watchlist-container")) {
        const container = document.getElementById("watchlist-movies");
        const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

        if (watchlist.length === 0) {
            container.innerHTML = "<p>Your watchlist is empty.</p>";
            return;
        }

        container.innerHTML = "";
        watchlist.forEach(movie => {
            const movieElement = document.createElement("div");
            movieElement.classList.add("movie");
            movieElement.innerHTML = `
                <img src="${movie.img}" alt="${movie.title}">
                <h2>${movie.title}</h2>
            `;
            container.appendChild(movieElement);
        });
    }
});