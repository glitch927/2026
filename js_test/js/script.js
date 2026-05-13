// let hero = document.querySelector("#h1");
// hero.textContent = "Hello world!";

myvariable = 3;

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

let html = document.querySelector("#h1")

html.onclick = function() {
    alert("누리지마")
}

let faceimg = document.querySelector("#faceimg");

faceimg.onclick = function() {
    let mysrc = faceimg.getAttribute("src");
    if (mysrc === "image/face.png") {
        faceimg.setAttribute("src", "image/face2.png")
    }
    else {
        faceimg.setAttribute("src", "image/face.png")
    }
};

let button = document.querySelector("#btn");
let btnheader = document.querySelector("#h1")

function setUserName() {
  let myName = prompt("이름은 적리지 마세요 ");
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    btnheader.innerHTML = "내 지시를 어긴 당신은 바로 " + myName;
  }
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    let storedName = localStorage.getItem("name");
    btnheader.textContent = "내 지시를 어긴 당신은 바로 " + storedName;
}

button.onclick = function () {
  setUserName();
};