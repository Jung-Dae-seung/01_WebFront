// 1번 문제
function check1() {
  let a = 5;
  let b = 10;

  let message = "";

  if(a < b) {
    message = "b값이 더 큽니다.";
  } else {
    message = "a값이 더 큽니다.";
  }

  alert(message);
}

// 2번 문제
function check2() {
  let n = 7;

  let message = "";

  if(n % 2 == 0) {
    message = "짝수입니다.";
  } else {
    message = "홀수입니다.";
  }

  alert(message);
}

// 3번 문제
function check3() {
  let x = 15;
  let y = 22;
  let z = 9;

  let message = "";

  /* let max = x;

  if(y > max) {
    max = y;
  }

  if(z > max) {
    max = z;
  } */

  if(x > y && x > z) {
    message = "가장 큰수는 x입니다.";
  } else if(y > x && y > z) {
    message = "가장 큰수는 y입니다.";
  } else if(z > x && z > y) {
    message = "가장 큰수는 z입니다.";
  }

  alert(message);
}

// 4번 문제
const strInput = document.getElementById("strInput");

function check4() {
  const str = strInput.value;

  let message = "입력받은 문자열이";

  switch(str) {
    case 'apple' : case 'banana' : message += `${str} 입니다.`; break;
    default : message += "다릅니다."; break;
  }

  alert(message);
}

// 5번 문제
const score = document.getElementById("score");

function check5() {
  const sco = score.value;

  let message = "학점은";

  if(sco > 90) {
    message += `A 입니다.`;
  } else if(sco > 80 && sco <= 90) {
    message += `B 입니다.`;
  } else if(sco > 70 && sco <= 80) {
    message += `C 입니다.`;
  } else if(sco > 60 && sco <= 70) {
    message += `D 입니다.`;
  } else {
    message += `F 입니다.`;
  }

  alert(message);
}

// 6번 문제
const ageInput = document.getElementById("ageInput");
const heiInput = document.getElementById("heiInput");

function check6() {
  const age = ageInput.value;
  const hei = heiInput.value;

  let message = "";

  if(age < 0 || age > 100) {
    message = "잘못 입력 하셨습니다.";
  } else {
    if(hei < 140) {
      message = "적정 키가 아닙니다.";
    } else if(age < 12) {
      message = "적정 연령이 아닙니다."
    } else {
      message = "탑승 가능";
    }
  }

  alert(message);
}

// 7번 문제
const monInput = document.getElementById("monInput");

function check7() {
  const mon = Number(monInput.value);

  switch(mon) {
    case 3 : 
    case 4 : 
    case 5 : 
      alert("봄"); break;

    case 6 : 
    case 7 : 
    case 8 : 
      alert("여름"); 
      const tempSum =  prompt("온도 입력(°C)");
      if(tempSum >= 30) {
        alert("폭염");
      } else {
        alert("null");
      }
      break;

    case 9 : 
    case 10 : 
    case 11 : 
      alert("가을"); break;
      
    case 12 : 
    case 1 : 
    case 2 : 
      alert("겨울")
      const tempWin =  prompt("온도 입력(°C)");
      if(tempWin != null) {
        if(tempWin <= 0) {
          alert("한파");
        }
      } else {
        alert(null);
      }
      break;

      default :
        alert("잘못된 달을 입력하였습니다.");
        break;
  }

}