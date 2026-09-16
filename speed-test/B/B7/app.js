const input = document.querySelectorAll('input');
const btn = document.querySelector('button');

function updateButtonState() {
    const isAllFilled = Array.from(input).every(input => input.value !== "");

    if (isAllFilled) {
        btn.disabled = false;
        btn.style.cursor = 'pointer'
    } else {
        btn.disabled = true;
    }
}

input.forEach((item, index) => {
    item.addEventListener('input', () => {
        if(/^[0-9]/.test(item.value)) {
            if(index < input.length - 1) {
                input[index + 1].focus();
            }
        } else {
            item.value = '';
        }
        updateButtonState();
    })
    item.addEventListener('keydown', (e) => {
        if(e.key === 'Backspace' && e.target.value === '') {
            const prevInput = input[index - 1];
            prevInput.value = '';
            prevInput.focus();
            updateButtonState();
        }
    })
})
// Ai assist //