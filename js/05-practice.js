const titleEl = document.createElement('h1')
titleEl.classList.add('page-title');
titleEl.textContent = 'Це заголовок';
console.log(titleEl);

console.log(document.body);
document.body.appendChild(titleEl);

const imageEl = document.createElement('img');
imageEl.src="https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
imageEl.alt = 'mountains';
imageEl.width = 340;
// console.log('imageEl', imageEl);

// document.body.appendChild(imageEl);

const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);

heroEl.append(titleEl, imageEl);

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Особістій каб';
navLinkEl.href='/profile';

// console.log(navItemEl);
// console.log(navLinkEl);

navItemEl.appendChild(navLinkEl);

const navEl = document.querySelector('.site-nav');

// navEl.appendChild(navItemEl);

// navEl.insertBefore(navItemEl, navEl.firstElementChild);

navEl.insertBefore(navItemEl, navEl.lastElementChild);
