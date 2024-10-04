const GRIDSIDE = 600;
let squaresPerSide =
  prompt("Please enter the number of squares per side (max 100):") || 16;

const sketchArea = document.querySelector("#sketch-area");

sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}PX`;

function setBackgroundColor() {
  this.style.backgroundColor = "black";
}

function createGridcells() {
  const numOfSquares = squaresPerSide * squaresPerSide;
  const widthOfHeight = `${GRIDSIDE / squaresPerSide - 2}px`;

  for (let i = 0; i < numOfSquares; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = gridCell.style.height = widthOfHeight;
    gridCell.classList.add("cell");

    sketchArea.appendChild(gridCell);

    gridCell.addEventListener("mouseover", setBackgroundColor);
  }
}

function removeGridCells() {
  while (sketchArea.firstChild) {
    sketchArea.removeChild(sketchArea.firstChild);
  }
}

createGridcells();
