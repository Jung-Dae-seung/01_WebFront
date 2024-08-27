// 식당명 변경
document.getElementById("resName").addEventListener("click", () => {
  // 기존 식당명 / input 태그 가져오기
  const exis = document.getElementById("resName");
  const name = document.getElementById("resNameInput");

  // input에 기존 식당명 넣기
  name.value = exis.innerText;

  // display style변경
  exis.style.display = "none";
  name.style.display = "block";
});

// blur처리시
document.getElementById("resNameInput").addEventListener("blur", () => {
  // 입력된 식당명 / span태그 가져오기
  const exis = document.getElementById("resName");
  const name = document.getElementById("resNameInput");

  // span에 입력된 식당명 넣기
  exis.innerText = name.value;

  // display style변경
  exis.style.display = "block";
  name.style.display = "none";
});
//


// 버튼 작업
const normal = document.querySelector(".normal-container");
const edit = document.querySelector(".edit-container");

// 수정버튼
document.getElementById("updateBtn").addEventListener("click", (e) => {
  // 버튼의 부모 노드 div style변경
  normal.classList.add("b-hidden");
  edit.classList.remove("b-hidden");

  // 메뉴 ul / li태그 가져오기
  const menu = document.querySelector(".menu-container");
  const menuLi = document.querySelectorAll(".menu");

  // 기존의 ul 비워두기
  menu.innerHTML = "";

  // li 개수 만큼 for문
  for(let i = 0; i < menuLi.length; i++) {

    // 새로만들 생성자 li, input
    const li = document.createElement("li");
    const check = document.createElement("input");
    const inName = document.createElement("input");
    const inPrice = document.createElement("input");

    // checkBox 만들고 type넣기
    check.setAttribute("type", "checkbox");
    check.classList.add("checkBox");

    // 클래스 추가
    li.classList.add("menu");
    inName.classList.add("menu-name");
    inPrice.classList.add("menu-price");

    // input에 기존의 span text값 넣기
    inName.value = menuLi[i].firstElementChild.innerText;
    inPrice.value = menuLi[i].lastElementChild.innerText;

    // li에 추가
    li.append(check);
    li.append(inName);
    li.append(inPrice);

    // ul에 추가
    menu.append(li);
    
  }


});

// 추가버튼
document.getElementById("addMenu").addEventListener("click", (e) => {
  // ul 태그 불러오기
  const ul = document.querySelector(".menu-container");

  // 새로만들 생성자 li, input
  const li = document.createElement("li");
  const check = document.createElement("input");
  const meName = document.createElement("input");
  const mePrice = document.createElement("input");

  // checkBox 만들고 type넣기
  check.setAttribute("type", "checkbox");
  check.classList.add("checkBox");
  
  // 클래스추가
  li.classList.add("menu");
  meName.classList.add("menu-name");
  mePrice.classList.add("menu-price");

  // li에 추가
  li.append(check);
  li.append(meName);
  li.append(mePrice);

  // ul에 추가
  ul.append(li);

});

// 삭제버튼
document.getElementById("deleteMenu").addEventListener("click", (e) => {
  // checkBox들 가져오기
  const checkList = document.querySelectorAll(".checkBox");

  // checkbox 전체 for문
  for(let i = 0; i < checkList.length; i++) {
    
    // check된게 있을시
    if(checkList[i].checked)  {
      checkList[i].parentElement.remove();  // check된 부모 요소 삭제
    }

  }
  
});


// 종료버튼
document.getElementById("exitBtn").addEventListener("click", (e) => {
  // 버튼의 부모 노드 div style변경
  normal.classList.remove("b-hidden");
  edit.classList.add("b-hidden");

  // 메뉴 ul / li태그 가져오기
  const menu = document.querySelector(".menu-container");
  const menuLi = document.querySelectorAll(".menu");

  // 기존의 ul 비워두기
  menu.innerHTML = "";

  // li 개수 만큼 for문
  for(let i = 0; i < menuLi.length; i++) {
    // 새로만들 생성자 li, input
    const li = document.createElement("li");
    const meName = document.createElement("span");
    const mePrice = document.createElement("span");

    // 클래스 추가
    li.classList.add("menu");
    meName.classList.add("menu-name");
    mePrice.classList.add("menu-price");

    // span text에 input value값 넣기
    meName.innerText = menuLi[i].firstElementChild.nextElementSibling.value;
    mePrice.innerText = menuLi[i].lastElementChild.value;

    // li에 추가
    li.append(meName);
    li.append(mePrice);

    // ul에 추가
    menu.append(li);
    
  }

});
