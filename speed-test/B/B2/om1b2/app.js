const wrp = document.querySelector('#wrap');
const inp = document.querySelector('input');
const btn = document.querySelector('.add');

btn.addEventListener('click', () => {
    const inp_t = `
        <div class="litxt">
            <p>${inp.value}</p>
            <button onclick="this.parentElement.remove();">삭제</button>
        </div>
        `
    if (inp.value.trim() === '') {
        alert('할 일을 입력해주세요.');
        inp.focus();
    }
    else {
        wrp.insertAdjacentHTML('beforeend',inp_t);
        inp.value='';
        inp.focus();
    }
})