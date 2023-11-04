import '../css/common.css';

/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

// const date = new Date().getTime();
// console.log(date);

// setTimeout(() => {
//     const date2 = new Date().getTime();
//     console.log(date2);

//     console.log(date2 - date);
// }, 3000);

const date = Date.now();
console.log(date);

setTimeout(() => {
    const date2 = Date.now();
    console.log(date2);

    console.log(date2 - date);
}, 3000);