const animation = document.querySelector('.end');
animation.addEventListener('animationend', () => {
    location.reload();
});