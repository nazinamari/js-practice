/*
 * Создём и добавляем коллекцию
 */
const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const option = colorPickerOptions[0];

// const buttonEl = document.createElement('button');
// buttonEl.type ='button';
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;

// console.log(buttonEl);

// -------OLD SCHOOL-----------
// const elements = [];

// for (let i = 0; i < colorPickerOptions.length; i += 1 ) {
//     console.log(colorPickerOptions[i]);
// }

// for (let i = 0; i < colorPickerOptions.length; i += 1 ) {
//     const option = colorPickerOptions[i];

//     const buttonEl = document.createElement('button');
//     buttonEl.type ='button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     elements.push(buttonEl);

// }

// console.log(elements);

// colorPickerContainerEl.append(...elements);

// Заменяем на -------- Map ------------

// const elements = colorPickerOptions.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type ='button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl
// })

// console.log(elements);

// colorPickerContainerEl.append(...elements);

// * Пишем функцию для создания разметки колорпикера

const makeColorPickerOptions = options => {
    return options.map(option => {
        const buttonEl = document.createElement('button');
        buttonEl.type ='button';
        buttonEl.classList.add('color-picker__option');
        buttonEl.textContent = option.label;
        buttonEl.style.backgroundColor = option.color;
    
        return buttonEl;
    });
};

const elements = makeColorPickerOptions(colorPickerOptions);

colorPickerContainerEl.append(...elements);