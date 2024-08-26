// 1번 문제
// (for)10부터 1까지의 숫자 거꾸로 출력하기
function fn1(){

  for(let x = 10; x >= 1; x--) {
    console.log(x);
  }

}

// 2번 문제
// (for)20부터 1까지의 숫자 중 짝수만 출력하기
function fn2(){

  for(let x = 20; x >= 1; x--) {
    if(x % 2 == 0) {
      console.log(x);
    }
  }

}

// 3번 문제
// (while)1부터 50까지의 숫자 중 5의 배수만 출력
function fn3(){

  let x = 1;

  while(x <= 50) {
    if(x % 5 == 0) {
      console.log(x);
    }
    x++;
  }

}

// 4번 문제
// (for)팩토리얼 계산 : 5의 팩토리얼을 구하라
// ex) 5! (5 factorial) = 5 × 4 × 3 × 2 × 1 = 120
function fn4(){

  let result = "";
  let num = 1;
  const fac = prompt("숫자를 입력하세요");

  for(let x = fac; x >= 1; x--) {
    if(x == 1) {
      result += `${x} = `;
    } else {
      result += `${x} x `;
    }
    num = num * x;
  }

  console.log(result + num);
}

// 5번 문제
// (2중 for문)2단부터 9단까지의 구구단을 출력
function fn5(){

  for(let x = 2; x <= 9; x++) {
    for(let y = 1; y <= 9; y++) {
      console.log(`${x} x ${y} = ${x*y}`);
    }
  }
}

// 6번 문제
// (for)숫자 3, 6, 9 게임
// 1부터 30까지의 숫자를 출력하되, 숫자에 3, 6, 9가 포함된 경우 "짝"을 출력
function fn6(){

  for(let x = 1; x <= 30; x++) {
    if(x % 10 == 3 || x % 10 == 6 || x % 10 == 9) {
      console.log("짝");
    } else {
      console.log(x);
    }
  }

}

// 7번 문제
// 2부터 20까지의 소수 찾기
// for 문을 사용하여 2부터 20까지의 숫자 중 소수를 찾아서 출력
// 소수는 1과 자기 자신 외에는 나누어 떨어지지 않는 수
// 힌트: 2, 3, 5, 7, 11, 13, 17, 19가 소수
function fn7(){

  for(let x = 2; x <= 20; x++) {
    let count = 0;

    for(let y = 1; y <= x; y++) {
      if(x % y == 0) {
        count++;

      }
    }

    if(count == 2) {
      console.log(x);
    }

  }
}