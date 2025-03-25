const container = document.querySelector(".padText");
const buttons = document.querySelector(".buttons");
const SelectBtn = document.querySelector(".select");
let gridSize, squareSize;

// Grid Configuration
// const gridSize = 5; // Change this for different grid sizes
// const squareSize = 40; // Fixed size for each square

SelectBtn.addEventListener("click", function () {
  container.innerHTML = "";
  gridSize = +prompt("ENTER THE GRIDSIZE:");
  squareSize = +prompt("ENTER THE SQUARESIZE:");
  if (gridSize <= 0 || squareSize <= 0) {
    alert("Please enter a positive number greater than 0");
  } else {
    // Set container size dynamically
    container.style.width = `${gridSize * squareSize}px`;
    container.style.height = `${gridSize * squareSize}px`;
  }
});

function createSquareBlackDivs() {
  for (let i = 1; i <= gridSize * gridSize; i++) {
    let square = document.createElement("div");
    square.id = i;
    square.textContent = i;
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.background = "white";
    container.appendChild(square);

    square.addEventListener("mouseenter", function () {
      square.style.background = "blue";
    });
    square.addEventListener("mouseout", function () {
      square.style.background = "black";
    });
  }
}

function createSquareRandomDivs() {
  for (let i = 1; i <= gridSize * gridSize; i++) {
    let square = document.createElement("div");
    square.id = i;
    square.textContent = i;
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
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
}
buttons.addEventListener("click", function (e) {
  e.preventDefault();
  let targetValue = e.target.textContent;

  // Clear the container before adding new squares
  container.innerHTML = "";

  if (targetValue === "black") {
    createSquareBlackDivs();
  } else if (targetValue === "random") {
    createSquareRandomDivs();
  } else if (targetValue === "reset") {
    container.innerHTML = " ";
  }
});
