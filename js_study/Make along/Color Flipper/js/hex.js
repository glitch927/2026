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

    // 여기서 복사 기능을 실행합니다!
    navigator.clipboard.writeText(hexColor)
      .then(() => {
          // 복사가 성공하면 알림창을 띄웁니다.
          alert(`복사 완료: ${hexColor}`);
      })
      .catch((err) => {
          // (선택사항) 만약 보안 문제나 오류 때문에 복사가 실패하면 이쪽이 실행됩니다.
          console.error("복사 실패 ㅠㅠ", err);
      });
});

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length);
}