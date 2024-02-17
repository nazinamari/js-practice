/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
import pokemonCardTpl from '../templates/pokemon-card.hbs';

fetch('https://pokeapi.co/api/v2/pokemon/1/')
.then(response => {
    return response.json();
})
.then(pokemon => {
    console.log(pokemon);

    // const markup = pokemonCardTpl(pokemon);

    // console.log(markup);

}).catch(error => {
    console.log(error);
});