const password = document.querySelector('input');
const text = document.querySelector('p');
password.addEventListener('input', () => {
    if (/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{8}/.test(password.value)) {
        password.style.border = '2px solid green';
        text.textContent = '강함';
        text.style.color = 'green';
    }
    else if (/^(?=.*[A-Z])(?=.*\d).{6}/.test(password.value)) {
        password.style.border = '2px solid orange';
        text.textContent = '보통';
        text.style.color = 'orange';
    }
    else if (password.value === '') {
        password.style.border = '2px solid black';
        text.textContent = '비밀번호';
        text.style.color = 'black';
    }
    else if (password.value.length < 6) {
        password.style.border = '2px solid red';
        text.textContent = '약함';
        text.style.color = 'red';
    }
})