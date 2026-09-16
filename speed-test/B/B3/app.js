const box = document.querySelector('.box');
const spd = 10;
const rs = box.clientWidth;
let x = 0;
let y = 0;

window.addEventListener('keydown', (e) => {
    const maxx = (document.body.clientWidth - rs) / 2
    const maxy = (document.body.clientHeight - rs) / 2
    if (e.key === 'ArrowUp') y -= spd;
    if (e.key === 'ArrowDown') y += spd;
    if (e.key === 'ArrowLeft') x -= spd;
    if (e.key === 'ArrowRight') x += spd;
    if (x < -maxx) x = -maxx;
    if (x > maxx) x = maxx;
    if (y < -maxy) y = -maxy;
    if (y > maxy) y = maxy;
    box.style.transform = `translate(${x}px, ${y}px)`;
})