/* 인라인 이벤트 모델 확인 */
function check1(btn) {

  // 매개변수 btn == 클릭한 버튼(this)
  console.log(btn);

  // 버튼의 배경색을 얻어와 저장
  const bgColor = btn.style.backgroundColor;

  // 버튼이 클릭 될 때 마다 pink <-> yellow 변경

  if(bgColor == "yellow") {
    btn.style.backgroundColor = "pink";
  } else {
    btn.style.backgroundColor = "yellow";
  }

}

// --------------------------------------

// 고전 이벤트 모델 확인

// 아이디가 test1-1인 요소를 얻어와 test1a 변수에 저장
const test1a = document.querySelector("#test1-1");

// 고전 이벤트 모델 작성법
// 요소.이벤트리스터 = 이벤트 핸들러

test1a.onclick = function() {
  alert("고전 이벤트 모델 확인 버튼 클릭됨");
}

// 고전 이벤트 모델 제거

// #test1-2 버튼 클릭시
// #test1-1의 onclick 이벤트 리스너의 이벤트 핸들러 제거
document.querySelector("#test1-2").onclick = function() {
  // test1-1 기존 onclick 이벤트 핸들러를 
  // null 로 덮어씌움(이벤트 제거)
  test1a.onclick = null;
  alert("이벤트 제거됨");
}

// 고전 이벤트 모델 단점

// test1-3 요소를 얻어와 test1c변수에 저장
const test1c = document.querySelector("#test1-3");

// test1c 요소가 클릭되었을 때 배경색을 red 로 변경
test1c.onclick = function() {
  test1c.style.backgroundColor = "red";
}

// test1c 요소가 클릭되었을 때 글자색을 white 로 변경
test1c.onclick = function() {
  test1c.style.color = "white";
}

// -> oncilck에 저장된 값이 덮어씌워지면서
// 이전 코드가 사라지는 문제 발생

// ------------------------------------------------

// 표준 이벤트 모델 확인
const test2 = document.querySelector("#test2");

// 표준 이벤트 모델 작성법
// 요소.addEventListener("이벤트종류", 이벤트핸들러(함수));

test2.addEventListener("click", function(e) {

  // 투명도 1 (불투명) -> 0 (투명) 0.1씩 감소

  // 현재 test2의 투명도 확인
  let curr = test2.style.opacity;

  // 맨처음에는 투명도 '' -> 1대임
  if(curr == '') {
    test2.style.opacity = 1;
    curr = 1;
  }

  // 투명도 0.1 감소
  test2.style.opacity = curr - 0.1;

  if(test2.style.opacity == 0) {  // 완전히 투명해졌다면
    test2.style.opacity = 1;  // 다시 불투명하게
  }

});

// test2 요소를 클릭하면 클릭 횟수 카운트
let count = 0;

test2.addEventListener("click", function(e) {

  count ++;
  
  // 표준 이벤트 모델의 이벤트 핸들러(함수)안에서
  // this == 이벤트가 발생한 요소
  this.innerText = count;
});

const input3 = document.querySelector("#input3");
const box3 = document.querySelector("#box3");

// input3 요소에 이벤트를 추가한다
// - 무슨이벤트? input3에 키보드가 올라왔을때
// -(이벤트핸들러) 함수안에 작성한 내용을 수행하겠다!
input3.addEventListener("keyup", function(e) {

  // 조건? 이벤트로써 감지된 키가 Enter 일때
  // 얻어온 input 요소의 내용(작성된값) 가져오기
  // box3의 배경색 대입하기
  if(e.key == "Enter") {
    const color = input3.value;
    console.log(color);
    box3.style.backgroundColor = color;
  }

});

// box3를 클릭하면
// box3가 가지고있는 배경색을 alert 출력
box3.addEventListener("click", function() {

  const color = this.style.backgroundColor;
  alert(`배경색 : ${color}`);
  
});