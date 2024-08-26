// 문자열.toLowerCase() : 영어를 모두 소문자로 변경
// 문자열.toUpperCase() : 영어를 모두 대문자로 변경

// const box = document.getElementsByClassName("key");
const box = document.querySelectorAll(".key");
const all = document.querySelector("*");

all.addEventListener("keydown", function(e) {

  for(let i = 0; i < box.length; i++) {
    if(e.key.toUpperCase() == box[i].innerText) {
      box[i].style.backgroundColor = "deepPink";
    }
  }
});

all.addEventListener("keyup", function(e) {

  for(let i = 0; i < box.length; i++) {
      box[i].style.backgroundColor = "white";
  }
})
