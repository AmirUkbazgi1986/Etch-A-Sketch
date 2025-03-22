// const inputEl = +prompt("enter the numbers of square divs you need");
// console.log(inputEl);
// Grid Configuration
const gridSize = 10; // Change this for different grid sizes
const squareSize = 40; // Fixed size for each square
const container = document.querySelector(".padText");
const buttons = document.querySelector(".buttons");
// Set container size dynamically
container.style.width = `${gridSize * squareSize}px`;
container.style.height = `${gridSize * squareSize}px`;

buttons.addEventListener("click", function (e) {
  e.preventDefault();
  let targetValue = e.target.textContent;
  // Clear the container before adding new squares
  container.innerHTML = "";
  if (targetValue === "black") {
    for (let i = 1; i <= gridSize * gridSize; i++) {
      let square = document.createElement("div");
      square.id = i;
      square.textContent = i;
      square.classList.add("square");
      square.style.background = "white";
      container.appendChild(square);
      square.addEventListener("mouseenter", function () {
        square.style.background = "blue";
      });
      square.addEventListener("mouseout", function () {
        square.style.background = "black";
      });
    }
  } else if (targetValue === "random") {
    for (let i = 1; i <= gridSize * gridSize; i++) {
      let square = document.createElement("div");
      square.id = i;
      square.textContent = i;
      square.classList.add("square");
      square.style.background = "white";
      container.appendChild(square);
      square.addEventListener("mouseenter", function () {
        square.style.background = "blue";
      });
      square.addEventListener("mouseout", function () {
        const random = "#" + Math.random().toString(16).substring(2, 8);
        square.style.background = random;
      });
    }
  } else if (targetValue === "reset") {
    container.innerHTML = " ";
  }
});

// const square = document.createElement("div");
// // square.id = i;
// square.classList.add("square");
// square.style.background = "black";
// container.appendChild(square);
// square.addEventListener("mouseenter", function () {
//   square.style.background = "blue";
// });
// square.addEventListener("mouseout", function () {
//   square.style.background = "black";
// });
