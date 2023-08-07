/*
 * Всплытие событий
 * event.target - целевой (исходный) элемент
 * event.currentTarget - текущий элемент, на слушателе которого поймали событие
 */

const refs = {
    parent: document.querySelector('#parent'),
    child: document.querySelector('#child'),
    innerChild: document.querySelector('#inner-child'),
};

