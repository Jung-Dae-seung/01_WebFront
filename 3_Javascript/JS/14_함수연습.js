// 1번 문제
function print1(name) {
  
  console.log(`Hello, ${name}!`);
}

document.querySelector("#btn1").addEventListener("click", () => {

  const name = prompt("name 입력");
  print1(name);
});


// 2번 문제
function print2(num1, num2) {

  console.log(num1 + num2);
}

document.querySelector("#btn2").addEventListener("click", () => {

  const num1 = prompt("첫 번째 값");
  const num2 = prompt("두 번째 값");
  print2(Number(num1), Number(num2));
});


// 3번 문제
document.querySelector("#btn3").addEventListener("click", () => {

  const num1 = prompt("첫 번째 값");
  const num2 = prompt("두 번째 값");
  console.log(Number(num1) * Number(num2));
});


// 4번 문제
function print4(num1, num2) {

  if(num1 > num2) {
    console.log("첫 번째 숫자가 더 큽니다");
  } else {
    console.log("두 번째 숫자가 더 크거나 같습니다");
  }
}

document.querySelector("#btn4").addEventListener("click", () => {

  const num1 = prompt("첫 번째 값");
  const num2 = prompt("두 번째 값");
  print4(num1, num2);
});


// 5번 문제
function print5(str1) {

  console.log(str1.length);
}

document.querySelector("#btn5").addEventListener("click", () => {

  const str1 = prompt("문자열 입력");
  print5(str1);
});


// 6번 문제
function print6(str, count) {

  let result = "";

  for(let i = 0; i < count; i++) {
    result += str;
  }

  console.log(result);
}

document.querySelector("#btn6").addEventListener("click", () => {

  const str1 = prompt("문자열 입력");
  const count = prompt("반복 횟수 입력");
  print6(str1, count);
});


// 7번 문제
function print7(num1) {

  if(num1 % 2 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

document.querySelector("#btn7").addEventListener("click", () => {

  const num1 = prompt("숫자 입력");
  print7(num1);
});


// 8번 문제
function print8(num1, num2, num3) {

  let max = num1;

  if(max < num2) {
    max = num2;
  } 

  if(max < num3) {
    max = num3;
  }

  console.log(`가장 큰수 : ${max}`);
}

document.querySelector("#btn8").addEventListener("click", () => {

  const num1 = prompt("1번째 숫자 입력");
  const num2 = prompt("2번째 숫자 입력");
  const num3 = prompt("3번째 숫자 입력");
  print8(num1, num2, num3);
});


// 9번 문제
function print9(numArr) {

  console.log(numArr[0]);
}

document.querySelector("#btn9").addEventListener("click", () => {

  const count = Number(prompt("반복 횟수 입력"));
  let numArr = [];


  for(let i = 0; i < count; i ++) {
    const num = prompt("배열에 넣을 값 입력");  
    numArr.push(num);
  }

  print9(numArr);
});


// 10번 문제
function print10(otherFn) {

  const count = Number(prompt("반복 횟수 입력"));
  let numArr = [];
  let sum = 0;
  let avg = 1;


  for(let i = 0; i < count; i++) {
    const num = Number(prompt("배열에 넣을 값 입력"));
    numArr.push(num);
  }

  for(let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
    avg *= numArr[i];
  }

  avg = avg / numArr.length;

  console.log(otherFn(sum, avg));

}

document.querySelector("#btn10").addEventListener("click", () => {

  print10( (sum, avg) => {
    return {"합계" : sum, "평균" : avg}
  });

});


// 11번 문제
function print11(otherFn) {

  const num1 = Number(prompt("1번째 숫자 입력"));
  const num2 = Number(prompt("2번째 숫자 입력"));
  const cal = prompt("연산자 입력(+, -, /, *)");
  let result = 0;

  switch(cal) {
    case "+" :
      result = num1 + num2; 
      break;
    case "-" :
      result = num1 - num2;
      break;
    case "/" :
      result = num1 / num2;
      break;
    case "*" :
      result = num1 * num2;
      break;
  }

  otherFn(result);

}

document.querySelector("#btn11").addEventListener("click", () => {

  print11( (result) => {
    console.log(result);
  });

});


// 12번 문제
function print12(gree, name) {

  console.log(`${gree} ${name}`);
}

document.querySelector("#btn12").addEventListener("click", () => {

  const gree = prompt("인사말 입력");
  const name = prompt("이름 입력");

  print12(gree, name);
});