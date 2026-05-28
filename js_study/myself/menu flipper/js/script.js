// ==========================================
// 1. 데이터 초기화 (로컬스토리지 확인 및 배열 선언)
// ==========================================
// 프로그램이 시작되자마자 가장 먼저 로컬스토리지에서 데이터를 읽어옵니다.
const savedMenus = localStorage.getItem("myMenus");

// 저장된 게 있다면 그것을 사용하고, 없다면 기본 배열을 세팅합니다.
let menuflip = savedMenus 
    ? JSON.parse(savedMenus) 
    : ["치킨", "피자", "햄버거", "순대국밥", "삼겹살", "삼계탕", "까르보나라", "김치볶음밥", "간장계란밥"];


// ==========================================
// 2. HTML 요소(DOM) 가져오기
// ==========================================
const btnRoll = document.getElementById("btn-roll");
const btnList = document.getElementById("btn-list");
const btnCustom = document.getElementById("btn-custom");
const menu = document.querySelector(".menu");

// 모달 내부 요소들
const modal = document.querySelector(".modal");
const listContainer = document.querySelector(".list");
const menuInput = document.getElementById("menu-input");
const btnAdd = document.getElementById("btn-add");


// ==========================================
// 3. 핵심 함수: 목록 화면에 그리기 (render)
// ==========================================
function renderList() {
    listContainer.innerHTML = ""; // 기존 목록을 싹 비우기

    menuflip.forEach((food, index) => {
        // li 태그 생성
        const li = document.createElement("li");
        li.textContent = food + " ";

        // 삭제 버튼 생성
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.style.cursor = "pointer";

        // ❌ 버튼 클릭 시 작동할 이벤트
        deleteBtn.addEventListener("click", function() {
            menuflip.splice(index, 1); // 배열에서 해당 메뉴 제거

            // 배열이 바뀌었으니 로컬스토리지에도 최신 상태를 글자(String)로 저장합니다.
            localStorage.setItem("myMenus", JSON.stringify(menuflip));
            
            renderList(); // 화면 새로고침
        });

        li.appendChild(deleteBtn);
        listContainer.appendChild(li);
    });
}

// 최초로 페이지가 로드되었을 때 목록을 한 번 그려줍니다.
renderList();


// ==========================================
// 4. 이벤트 리스너 (사용자 상호작용)
// ==========================================

// [Roll 버튼] 랜덤 추천 기능
btnRoll.addEventListener("click", function() {
    if (menuflip.length === 0) {
        menu.textContent = "(비어있음)";
        alert("메뉴판이 비었습니다! custom 버튼을 눌러 추가해주세요.");
        return;
    }
    const randomIndex = Math.floor(Math.random() * menuflip.length);
    menu.textContent = menuflip[randomIndex];
});

// [List 버튼] 입력창 숨기고, 리스트를 꽉 채우기 (보기 모드)
btnList.addEventListener("click", function() {
    document.querySelector(".input-box").style.display = "none"; 
    listContainer.classList.add("full-size"); // 꽉 찬 스타일 적용
    modal.style.display = "flex";
});

// [Custom 버튼] 입력창 보여주고, 리스트는 원래 크기로 (편집 모드)
btnCustom.addEventListener("click", function() {
    document.querySelector(".input-box").style.display = "flex"; 
    listContainer.classList.remove("full-size"); // 원래 스타일로 복구
    modal.style.display = "flex";
    menuInput.focus(); // 입력창에 바로 커서 주기
});

// [모달 배경 닫기] 어두운 배경 클릭 시 닫기
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// [메뉴 추가 버튼] 중복 검사 + 로컬스토리지 저장 기능 통합
btnAdd.addEventListener("click", function() {
    const newMenu = menuInput.value.trim(); // 입력된 글자 가져오기 (공백 제거)
    
    // 유효성 및 중복 검사
    if (newMenu === "") { 
        alert("메뉴를 입력해주세요!"); 
        return; 
    }
    if (menuflip.includes(newMenu)) { 
        alert("이미 목록에 있는 메뉴입니다!"); 
        menuInput.value = ""; 
        return; 
    }

    // 검사를 통과하면 배열에 새 음식 추가
    menuflip.push(newMenu);
    
    // 로컬스토리지에도 최신 배열 상태를 저장합니다.
    localStorage.setItem("myMenus", JSON.stringify(menuflip));

    menuInput.value = "";   // 입력창 비우기
    renderList();           // 리스트 새로고침
});

// [엔터키 추가] 입력창에서 엔터를 누르면 추가 버튼이 자동으로 클릭됩니다. (한글 버그 방지)
menuInput.addEventListener("keydown", function(e) {
    // 한글 입력 시 글자 조합 중에 엔터를 치면 이벤트가 두 번 실행되는 현상을 막아줍니다.
    if (e.isComposing) return; 

    if (e.key === "Enter") {
        e.preventDefault(); // 엔터 입력 시 브라우저가 기본적으로 행하는 새로고침 등 방지
        btnAdd.click();     // 추가 버튼을 강제로 클릭!
    }
});

// [텍스트 클릭 복사] 추천된 음식을 누르면 클립보드에 복사
menu.addEventListener('click', function() {
    const copyText = menu.textContent;
    if (copyText === "이것" || copyText === "(비어있음)") return; 

    navigator.clipboard.writeText(copyText).then(() => {
        alert(`${copyText} 복사 완료!`);
    });
});