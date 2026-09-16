const inp = document.querySelector('input');
const txt = document.querySelector('p');

inp.addEventListener('input', () => {
    if (/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8}/.test(inp.value)) {
        inp.style.border = '2px solid green';
        txt.textContent = '강함';
        txt.style.color = 'green';
    }
    else if (/^(?=.*[A-Z])(?=.*\d).{6}/.test(inp.value)) {
        inp.style.border = '2px solid orange';
        txt.textContent = '보통';
        txt.style.color = 'orange';
    }
    else if (inp.value === '') {
        inp.style.border = '2px solid black';
        txt.textContent = '비밀번호';
        txt.style.color = 'black';
    }
    else if (inp.value.length < 6) {
        inp.style.border = '2px solid red';
        txt.textContent = '약함';
        txt.style.color = 'red';
    }
})