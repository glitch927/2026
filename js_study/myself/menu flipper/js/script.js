const menuflip = ["치킨", "피자", "햄버거", "순대국밥", "삼겹살", "목살", "까르보나라", "김치볶음밥", "간장계란밥"];
const btn = document.getElementById("btn");
const menu = document.querySelector(".menu");

btn.addEventListener("click", function() {
    result = getRandomMenu();

    menu.textContent = menuflip[result];
});

menu.addEventListener('click', function() {
    copy = menu.textContent;

    navigator.clipboard.writeText(copy).then(() => {
        alert("복사완료")
    })
})

function getRandomMenu() {
    return Math.floor(Math.random()*menuflip.length);
}