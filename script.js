const canvas = document.getElementById('canvas');
const cell = document.getElementById('cell');
const resetButton = document.querySelector('button');

let isMouseDown = false;

function cellClicked() {
  this.style.backgroundColor = 'black';
}

function handleMouseDown() {
  isMouseDown = true;
  cellClicked.call(this);
}

function handleMouseEnter() {
  if (isMouseDown) {
    cellClicked.call(this);
  }
}

function handleMouseUp() {
  isMouseDown = false;
}

for (let i = 0; i < 255; i++) {
  const newCell = cell.cloneNode();
  canvas.appendChild(newCell);
  newCell.addEventListener('mousedown', handleMouseDown);
  newCell.addEventListener('mouseenter', handleMouseEnter);
}

document.addEventListener('mouseup', handleMouseUp);

resetButton.addEventListener('click', () => {
  const cells = document.querySelectorAll('.cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = 'white';
  }
});