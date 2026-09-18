async function getSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displaySpotlights(members);
    } catch (error) {
        console.log(error);
    }
}

function membershipLabel(level) {
    if (level === 3) return 'Gold';
    if (level === 2) return 'Silver';
    return 'Non-Profit';
}

function displaySpotlights(members) {
    const eligible = members.filter(member =>
        member.membership === 2 || member.membership === 3
    );

    const shuffled = eligible.sort(() => 0.5 - Math.random());
    const numberToShow = Math.random() < 0.5 ? 2 : 3;
    const selected = shuffled.slice(0, numberToShow);

    const spotlightSection = document.querySelector('#spotlights');

    // Clear only the previously rendered cards, keep the <h2> title
    spotlightSection.querySelectorAll('.spotlight-card').forEach(card => card.remove());

    selected.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <span class="membership-level">${membershipLabel(member.membership)}</span>
        `;
        spotlightSection.appendChild(card);
    });
}

getSpotlights();