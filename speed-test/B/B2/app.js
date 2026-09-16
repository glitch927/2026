const wrap = document.querySelector('#wrap');
const inp = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const todo = `
    <div class="todoli">
            <p>${inp.value}</p>
            <button onclick="this.parentElement.remove();">삭제</button>
    </div>
    `
    if (inp.value.trim() === '') {
        alert('할 일을 입력해주세요.');
        inp.focus();
    }
    else {
        wrap.insertAdjacentHTML('beforeend',todo);
        inp.value = '';
        inp.focus();
    }
})