// px
const inwid = document.querySelector("#inwid");
const inhei = document.querySelector("#inhei");
const infont = document.querySelector("#infont");

// radio
const bold = document.getElementsByName("fontBold");
const hor = document.getElementsByName("horizonText");
const ver = document.getElementsByName("verticalText");

// color
const incolor = document.querySelector("#incolor");
const inback = document.querySelector("#inback");

// text
const inText = document.querySelector("#inText");

// output
const output = document.querySelector("#outputDisplay");

// 입력한 값대로 그림 출력
function comitFn() {

  // 초기화
  output.innerHTML = "";

  // px
  output.style.width = `${inwid.value}px`;
  output.style.height = `${inhei.value}px`;
  output.style.fontSize = `${infont.value}px`;

  // color
  output.style.backgroundColor = inback.value;
  output.style.color = incolor.value;

  // text
  output.innerText = inText.value;
  
  // radio(weight)
  for(let i = 0; i < bold.length; i++) {

   if(bold[i].checked) {
    output.style.fontWeight = bold[i].value;
   }

  }

  // radio(hor)
  for(let i = 0; i < hor.length; i++) {

    if(hor[i].checked) {
      output.style.justifyContent = hor[i].value;
    }

  }

  // radio(ver)
  for(let i = 0; i < ver.length; i++) {

    if(ver[i].checked) {
      output.style.alignItems = ver[i].value;
    }
  }

  // border
  output.style.border = "4px solid black";


}