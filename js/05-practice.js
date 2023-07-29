const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseenter', onMouseEnter);
boxRef.addEventListener('mouseleave', onMouseLeave);
boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
    const box = event.currentTarget;
    box.classList.add('box--active');
}

function onMouseLeave(event) {
    const box = event.currentTarget;
    box.classList.remove('box--active');
}

function onMouseMove(event) {
    console.log(event);
}