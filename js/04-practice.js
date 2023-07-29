const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keypress', onKeypress);
refs.clearBtn.addEventListener('click', onClearOutput);

// keydown - на все клавиши escp enter и другие
// keypress реагіруют только на те клавиши, которые гинерят символ 

function onKeypress(event) {
    // console.log(event.key)
    refs.output.textContent += event.key;
}

function onClearOutput () {
    refs.output.textContent = '';
}

