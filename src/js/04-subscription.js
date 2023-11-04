import '../css/common.css';
import "bootstrap.native";
BSN = require("bootstrap.native");

const modal = new BSN.Modal('#subscription-modal');

const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0; 
let hasSubscribed = false; 

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
  closeBtn: document.querySelector('button[data-dismiss]'),
  };

  openModal();

refs.closeBtn.addEventListener('click' , () => {
  modal.hide();
  openModal();
});

refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick)

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

function onSubscribeBtnClick () {
  hasSubscribed = true;
  console.log('Максимальное кол-во надоеданий или подписался');
  modal.hide();
}








