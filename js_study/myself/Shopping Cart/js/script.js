let count = 1;
let price = 12000;
let total = price*count;

const countText = document.getElementById("count-1");
const totalText = document.getElementById("total");
const btns = document.querySelectorAll(".btn");

totalText.textContent = total+"원";

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const style = e.currentTarget.classList;

            if (style.contains("dec")) {
                if (count == 1) {
                    alert("nope");
                } else {
                    count--;
                }
            } else if (style.contains("inc")) {
                count++;
            }
        total = price * count;
        totalText.textContent = total+"원";
        countText.textContent = count;
    })
})