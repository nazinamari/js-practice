import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-msg';

const formData = {};

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
    input: document.querySelector('.js-feedback-form input')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    formData[e.target.name] = e.target.value;
    // console.log(formData);
});

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
    // const value = evt.currentTarget.value;
    const form = JSON.stringify(formData);
    
    localStorage.setItem(STORAGE_KEY, form);
}

function populateTextarea() {
    const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedForm) {
        refs.textarea.value = savedForm.message;
        refs.input.value = savedForm.name;
        
    }
}



/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */

// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });


