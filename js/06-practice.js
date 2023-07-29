const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
    };

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackDropClick);


function onOpenModal () {
    window.addEventListener('keydown', onEscapeKeyPress);
    document.body.classList.add('show-modal')
};

function onCloseModal() {
    window.removeEventListener('keydown', onEscapeKeyPress);
    document.body.classList.remove('show-modal');
};

function onBackDropClick(event) {
    // console.log(event.target)

    if(event.target === event.currentTarget){
        onCloseModal();
    }
}

function onEscapeKeyPress(event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;

    if (isEscKey) {
        onCloseModal();
    }
}
