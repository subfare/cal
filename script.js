const calendar = document.querySelector('.calendar');
const today = new Date();
const currentDay = today.getDate();

// Example surprises (you can customize them)
const surprises = [
    "TEST1",
    "test2",
    "test3",
    "test4",
    "tes5",
    "tes6",
    "tes7",
    // Add up to 25 surprises
];

for (let i = 1; i <= 25; i++) {
    const door = document.createElement('div');
    door.classList.add('door', i > currentDay ? 'locked' : 'unlocked');
    door.innerHTML = `<span>${i}</span>
        <div class="content">${i <= surprises.length ? surprises[i - 1] : "Surprise!"}</div>`;

    door.addEventListener('click', () => {
        if (i <= currentDay) {
            door.classList.remove('locked');
            door.classList.add('unlocked');
        }
    });

    calendar.appendChild(door);
}
