import '../css/common.css';

const horses = [
'Secretariat',
'Eclipse',
'West Australian',
'Flying Fox',
'Seabiscuit',
];

let raceCounter = 0;

const refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart () {
    raceCounter += 1;
    const promises = horses.map(run);

    updateWinnerField('');
    updateProgressField('🤖 Заезд начался, ставки не принимаются!');
    determineWinner(promises);
    waitForAll(promises);
};

function determineWinner (horsesPromises) {
    Promise.race(horsesPromises).then(({horse, time}) => {
        updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time} времени`);
        updateResultsTable({ horse, time, raceCounter})
});
};

function waitForAll (horsesPromises) {
    Promise.all(horsesPromises).then(() => {
        updateProgressField('📝 Заезд окончен, принимаются ставки.');
});
}


function updateWinnerField(message) {
    refs.winnerField.textContent = message;
};

function updateProgressField(message) {
    refs.progressField.textContent = message;
};

function updateResultsTable({ horse, time, raceCounter }) {
    const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
    refs.tableBody.insertAdjacentHTML('beforeend', tr);
};

function run (horse) {
    return new Promise((resolve, reject) => {
        const time = getRandomTime(2000, 3500)

        setTimeout(() => {
            resolve({horse, time});
        }, time)
    })
};

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// console.log(
//     '%c 🤖 Заезд начался, ставки не принимаются!',
//     'color: brown; font-size: 14px;'
// );

// const promises = horses.map(run);

/*
 * Promise.race([]) для ожидания первого выполнившегося промиса (самого бистрого)
 */
/*
 * Promise.all([]) для ожидания всех промисов
 */

// Promise.race(promises).then(({horse, time}) => {
//     console.log(`🎉 Победил ${horse}, финишировав за ${time}
//     времени`);
// })

// * Все лошаді

// Promise.all(promises).then(x => console.log('📝 Заезд окончен, принимаются ставки.'));

// run('Mango')
// .then(x => console.log(x))
// // .catch(e => console.log(e));