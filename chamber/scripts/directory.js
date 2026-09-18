async function getMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
}

function membershipLabel(level) {
    if (level === 3) return 'Gold';
    if (level === 2) return 'Silver';
    return 'Non-Profit';
}

function displayMembers(members) {
    const directory = document.querySelector('#directory');
    directory.innerHTML = '';

    members.forEach((member) => {
        const card = document.createElement('div');
        card.classList.add('member-card');

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.category}</p>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <span class="membership-level">Level: ${membershipLabel(member.membership)}</span>
        `;

        directory.appendChild(card);
    });
}

/* Grid/List toggle */
const gridBtn = document.querySelector('#grid-btn');
const listBtn = document.querySelector('#list-btn');
const directory = document.querySelector('#directory');

gridBtn.addEventListener('click', () => {
    directory.classList.remove('list-view');
    directory.classList.add('grid-view');
});

listBtn.addEventListener('click', () => {
    directory.classList.remove('grid-view');
    directory.classList.add('list-view');
});

getMembers();