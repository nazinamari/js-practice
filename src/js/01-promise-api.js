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

// console.log(promise);

promise.then(
    result => {
        console.log('onFulfilled -> onFulfilled');
        console.log(`✅ ${result}`);
}, 
    error => {
        console.log('onRejected -> onRejected');
        console.log(`❌ ${error}`);
    },
);



// then(onSuccess, onError)