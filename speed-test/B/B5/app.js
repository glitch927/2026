const body = document.querySelector('body')
const inp = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const inp_color = inp.value;
    body.style.background = inp_color;
})