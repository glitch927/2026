const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

// 버튼 대신 글자를 클릭했을 때 복사가 실행되도록 변경
color.addEventListener('click', function() {
    const currentHex = color.textContent; // 현재 적혀있는 텍스트 가져오기
    
    navigator.clipboard.writeText(currentHex).then(() => {
        alert("복사 완료!");
    });
});

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length);
}