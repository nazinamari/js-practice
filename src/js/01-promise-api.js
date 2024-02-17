/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
    const canFulfill = Math.random() > 0.5;

    setTimeout(() => {
        if(canFulfill) {
            resolve('Промис выполнился');
        }
    
        reject('Промис ошибка');
    }, 2000);
});

console.log(promise);

// promise.then(result => {
//     console.log(result);
// });

// then(onSuccess, onError)

// promise.then(
//     result => {
//         console.log(`✅ ${result}`);
//     },
//     error => {
//         console.log(`❌ ${error}`); 
//     },
// );
promise.then(onFulfilled, onRejected);

function onFulfilled (result) {
    console.log(`✅ ${result}`);
};

function onRejected (error) {
    console.log(`❌ ${error}`);
};

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

promise
.then(onFulfilled)
.then(x => {
    console.log(x);

    return 10;
})
.then(y => {
    console.log(y);
})
.catch(error => console.log(error))
.finally(() => console.log('я буду выполнен в любом случае'));