/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', () => {
//     console.log('click')
// });

addListenerBtn.addEventListener('click', event => {
    targetBtn.addEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick(event) {
    console.log('click po cele');
}

removeListenerBtn.addEventListener('click', event => {
    targetBtn.removeEventListener('click', onTargetBtnClick)
});