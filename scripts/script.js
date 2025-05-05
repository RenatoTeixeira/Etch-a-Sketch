let container = document.querySelector(".container");
let value = 16;

makeGrid();

const button = document.querySelector(".btn");
button.addEventListener("click", removeGrid);
button.addEventListener("click", newGrid);

function newGrid() {
  let newValue = prompt("What is the value?");
  if (newValue > 0 && newValue <= 100) {
    value = newValue;
    makeGrid();
  } else {
    alert("Invalid value!");
    newGrid();
  }
}

function removeGrid() {
  const divR = document.getElementsByClassName("square");
  while (divR.length > 0) {
    divR[0].parentNode.removeChild(divR[0]);
  }
}

function makeGrid() {
  for (let i = 0; i < value * value; i++) {
    let size = 320 / value;
    const div = document.createElement("div");
    let opacity = 1;
    container.append(div);
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.classList.add("square");
    div.addEventListener(
      "mouseover",
      () =>
        (div.style.backgroundColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`),
    );
    div.addEventListener("mouseover", () => (opacity = opacity - 0.1));
    div.addEventListener("mouseover", () => (div.style.opacity = opacity));
  }
}

function randomNumber(a) {
  return Math.floor(Math.random() * a);
}

function getOpacityValue() {
  const div = document.querySelector(".square");
  const opacity = div.style.opacity;
}
