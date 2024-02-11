/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// const makeOrder = dish => {
//     const DELAY = 1000;

//     return new Promise((resolve, reject) => {

//         const passed = Math.random() > 0.5;

//         setTimeout(() => {
//             if (passed) {
//                 resolve('вот ваше блюдо');
//             } else {
//                 reject('Sorry temporary out of stock')
//             }
//         }, DELAY);
//     });
// };

// makeOrder('пірожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
// }

// function onMakeOrderError (error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// }

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

// const makeOrder = (dish, onSuccess, onError) => {
//     return new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;

//         if (passed) {
//             resolve('вот ваше блюдо');
//             } 
//             reject('Sorry temporary out of stock');
//     }) 

// };

// makeOrder('пірожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
// }

// function onMakeOrderError (error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// }

// * Если только успех 
// * - Promise.resolve()

//const makeOrder = dish => {
//     return Promise.resolve('Вот ваше блюдо')
// }

// makeOrder('пірожок').then(onMakeOrderSuccess);

/*
 * Покемоны с https://pokeapi.co/
 */

// fetch('https://pokeapi.co/api/v2/pokemon/1')
// .then(r => r.json())
// .then(pokemon => {
//     console.log(pokemon);
// }).catch(error => console.log(error));

// Еслі много пакемонов

// const fetchPokemonById = id => {
// return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())};

// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);

// // fetchPokemonById(2);
// // fetchPokemonById(3);

// function onFetchSuccess (pokemon) {
//     console.log(pokemon);
// };

// function onFetchError (error) {
//     console.log(error);
// };

// const makePromise = () => {
//     return new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;
//         if(passed) {
//             resolve('This is resolve')
//         }
//         reject('Do not pass')
//     })
// }

// makePromise().then(result => console.log(result)).catch(error => console.log(error));

// * Вместе с setTimeout

const makePromise = () => {
    return new Promise((resolve, reject) => {
        const passed = Math.random() > 0.5;
        setTimeout(() => {
            if(passed) {
                resolve('This is resolve')
            }
            reject('Do not pass')
        }, 2000);
    })
}

makePromise()
.then(result => console.log(result))
.catch(error => console.log(error));