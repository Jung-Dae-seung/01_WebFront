const add = document.querySelector("#add");
const container = document.querySelector(".container");
const calc = document.querySelector("#calc");

add.addEventListener("click", () => {

  // div
  const row = document.createElement("div");
  row.classList.add("row");

  container.append(row);

  // input
  const input = document.createElement("input");
  // input.type = "number";
  input.setAttribute("type", "number");
  input.classList.add("input-number");

  row.append(input);

  // span
  const span = document.createElement("span");
  span.classList.add("remove-row");

  /*
  span.onclick = function() { 
    this.parentElement.remove();
  };
  */

  span.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  })

  span.innerHTML = "&times;";

  row.append(span);


});


calc.addEventListener("click", () => {
  const input = document.querySelectorAll(".input-number");

  let sum = 0;

  for(let i = 0; i < input.length; i++) {
    sum +=  Number(input[i].value);
  }

  alert(`결과 : ${sum}`);
})

