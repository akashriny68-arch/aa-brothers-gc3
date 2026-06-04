const searchInput = document.getElementById("searchInput");
const gamesContainer = document.getElementById("games-container");

searchInput.addEventListener("keyup", () => {

    const searchValue = searchInput.value.toLowerCase();

    const cards = gamesContainer.querySelectorAll(".card");

    cards.forEach(card => {

        const gameName = card.querySelector("h3").textContent.toLowerCase();

        if(gameName.includes(searchValue)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("./sw.js")
    .then(() => {
        console.log("PWA Ready");
    })
    .catch(err => {
        console.log(err);
    });

}

    });

});