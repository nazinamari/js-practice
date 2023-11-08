/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
    const canFullfill = Math.random() > 0.5;

    setTimeout(() => {
    if(canFullfill) {
        resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)')
    }

    reject('Промис выполнился с ошибкой (отклонён, rejected)')
    }, 2000)
});

// promise.then(onFullfilled, onRejected)

function onFullfilled (result) {
    console.log('onFulfilled -> onFulfilled');
    console.log(`✅ ${result}`);
}

function onRejected (error) {
    console.log('onRejected -> onRejected');
    console.log(`❌ ${error}`);
}

// console.log(promise);

// promise.then(
//     result => {
//         console.log('onFulfilled -> onFulfilled');
//         console.log(`✅ ${result}`);
// }, 
//     error => {
//         console.log('onRejected -> onRejected');
//         console.log(`❌ ${error}`);
//     },
// );

// then(onSuccess, onError)

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

promise.then(result => {
    console.log(result);

    return 5
}).then(x => {
    console.log(x);

    return 3
}).then(y => {
    console.log(y);
}).catcpromise