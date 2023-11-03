// import '../css/common.css';
// import BSN from 'bootstrap.native';

// const modal = new BSN.Modal('#subscription-modal');
// const subscribeBtn = document.querySelector('button[data-subscribe]');

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;

// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//     if(promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//         console.log("Нужно сотановить интервал");
//         clearInterval(intervalId);
//         return;
//     }

//     console.log('Подпишись на рассылку - ' + Date.now() );
//     promptCounter += 1;
// }, PROMPT_DELAY);

// const modal = new BSN.Modal('#subscription-modal');


// console.log(modal);
// modal.show();

import '../css/common.css';
import "bootstrap.native"
// import BSN from 'bootstrap.native';
BSN = require("bootstrap.native")

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};
const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;
const modal = new BSN.Modal('#subscription-modal');

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('Максимальное кол-во надоеданий или подписался');
    return;
  }

  setTimeout(() => {
    console.log('Открываем надоедалку');
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribed = true;
  modal.hide();
}