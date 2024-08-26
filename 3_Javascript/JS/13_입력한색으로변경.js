document.querySelector("#changeButton").addEventListener("click", function() {
  const color = document.querySelectorAll(".color-input");
  const box = document.querySelectorAll(".box");

  for(let i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = color[i].value;
  }

})