import '../css/common.css';

const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockface: document.querySelector('.js-clockface'),
};

class Timer {
    constructor({onTick}){
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;
        this.init();
    }

    init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }
    start() {
        if(this.isActive) {
            return;
        }
        const startTime = Date.now();
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now()
            const deltaTime = currentTime - startTime;
            const time = this.getTimeComponents(deltaTime);

            this.onTick(time);
        }, 1000)
    }
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false; 
        this.init();
    }
    getTimeComponents(time) {
        const hours = this.pad((Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),));
        const mins = this.pad((Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))));
        const secs = this.pad((Math.floor((time % (1000 * 60)) / 1000)));
    
        return { hours, mins, secs };
    
    }

    pad(value) {
        return String(value).padStart(2, '0');
    };
}

const timer = new Timer({
    onTick: updateClockface,
});

// const timer = {
//     intervalId: null,
//     isActive: false,

//     start() {
//         if(this.isActive) {
//             return;
//         }
//         const startTime = Date.now();
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now()
//             const deltaTime = currentTime - startTime;
//             // const timeComponents = getTimeComponents(deltaTime);
//             const time = getTimeComponents(deltaTime);
//             updateClockface(time);
//             // console.log(`${hours}:${mins}:${secs}`);
//             // console.log(new Date(deltaTime).getUTCHours);
//             console.log(
//                 `${pad(new Date(deltaTime).getUTCHours())}:${pad(new Date(deltaTime).getMinutes())}:${pad(new Date(deltaTime).getSeconds())}`);
//         }, 1000)
//     },
//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false; 
//     }
// };


refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

/*
 * - Принимает время в миллисекундах
 * - Высчитывает сколько в них вмещается часов/минут/секунд
 * - Рисует интерфейсq
 */
function updateClockface({ hours, mins, secs }) {
    refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

/*
   * - Принимает время в миллисекундах
   * - Высчитывает сколько в них вмещается часов/минут/секунд
   * - Возвращает обьект со свойствами hours, mins, secs
   * - Адская копипаста со стека 💩
   */

// function getTimeComponents(time) {
//     const hours = (Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),);
//     const mins = (Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = (Math.floor((time % (1000 * 60)) / 1000));
//     return { hours, mins, secs };
// }

/*
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */

// function pad(value) {
//     return String(value).padStart(2, '0');
// };