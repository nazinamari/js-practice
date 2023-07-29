const refs = {
    input: document.querySelector('.js-input'),
    nameLabel: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
};

refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseChange)

function onInputFocus() {
    console.log('Інпут отримав фокус');
}

function onInputChange(event) {
    // console.log(event.currentTarget.value);

    refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange (event) {
    // console.log(event.currentTarget.checked);
    // console.log('refs.btn.disabled: ', refs.btn.disabled);

    refs.btn.disabled = !event.currentTarget.checked;
}

