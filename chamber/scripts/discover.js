import { places } from "../scripts/discover.mjs";

// ---------- Cards ----------
const grid = document.querySelector("#discover-grid");

function createCard(place) {
    const card = document.createElement("article");
    card.classList.add("discover-card");
    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}" alt="${place.name}" width="300" height="200" loading="lazy">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button type="button">Learn more</button>
    `;
    return card;
}

places.forEach(place => grid.appendChild(createCard(place)));


const MS_PER_DAY = 1000 * 60 * 60 * 24;
const box = document.querySelector("#visit-message");
const text = document.querySelector("#visit-text");
const closeBtn = document.querySelector("#visit-close");

function getVisitMessage() {
    const now = Date.now();
    const last = Number(localStorage.getItem("lastVisit"));
    localStorage.setItem("lastVisit", now);

    if (!last) {
        return "Welcome! Let us know if you have any questions.";
    }

    const days = Math.floor((now - last) / MS_PER_DAY);

    if (days < 1) {
        return "Back so soon! Awesome!";
    }
    return `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
}

text.textContent = getVisitMessage();
box.hidden = false;
closeBtn.addEventListener("click", () => (box.hidden = true));