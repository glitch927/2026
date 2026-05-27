const reduce = document.querySelector('.reduce');
const reset = document.querySelector('.reset');
const add = document.querySelector('.add');
const num = document.querySelector('#num');

let i = 0;

reduce.addEventListener('click',function() {
    if (i >= 1) {
        i -= 1;
        num.textContent = i;
    }
    else {
        i += 0
        num.textContent = i;
    }
});

reset.addEventListener('click',function() {
    i = 0;
    num.textContent = i;
});
add.addEventListener('click',function() {
    i += 1;
    num.textContent = i;
});