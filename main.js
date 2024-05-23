const gridContainer = document.querySelector('.main-container');
const gridParent = document.querySelector("#grid");
const gridNumberElement = document.querySelector('#grid-size-value');
const penColor = document.querySelector('#pen-color-value');
const gridItemBgColorELement = document.querySelector('#grid-color-value');
const resetButton = document.querySelector('#reset');
const toggleModeBtn = document.querySelector('#toggle-mode');
const rainbowButton = document.querySelector('#rainbow-mode');
let gridNumber = gridNumberElement.value;
let height = gridContainer.clientHeight / gridNumber;
gridNumberElement.addEventListener('change',update);
// Array of colors with names and hex values
// Array of color hex values
const colors = [
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#00FFFF", // Cyan
  "#FF00FF", // Magenta
  "#FFA500", // Orange
  "#800080", // Purple
  "#FFC0CB", // Pink
  "#A52A2A", // Brown
  "#000000", // Black
  "#FFFFFF", // White
  "#808080", // Gray
  "#ADD8E6", // LightBlue
  "#00FF00", // Lime
  "#800000", // Maroon
  "#000080", // Navy
  "#808000", // Olive
  "#008080", // Teal
  "#C0C0C0"  // Silver
];




let resetting = false;
let eraseState = false;
let drawingColor = penColor.value;
let rainbowMode = false;
  update();
function reset(btnClicked) {
    gridContainer.innerHTML = '';
  if(btnClicked)
    gridNumberElement.value = 16;
  resetting = true;
  update();
}
function update(){
  if(!resetting)
    reset(false);
  resetting = false;
  gridNumber = gridNumberElement.value;
  height = gridContainer.clientHeight / gridNumber;
  gridContainer.innerHTML = '';
  for(let i = 0; i < gridNumber; i++){
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    gridRow.style.height = height + 'px';
    for(let j = 0; j < gridNumber; j++){
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.style.backgroundColor = gridItemBgColorELement.value;
      gridItem.id = i.toString()+j.toString();
      gridRow.appendChild(gridItem);
    }
    gridContainer.appendChild(gridRow);
  }
}
resetButton.addEventListener('click',()=> reset(true));
gridContainer.addEventListener('mouseover', function(e){
  let target = e.target;
  if(target.classList.contains('grid-item')){
  if(!eraseState){
    drawingColor= rainbowMode ? colors[Math.floor((Math.random() * 20) - 1)]: penColor.value;
  }
    target.style.backgroundColor = drawingColor;
  }
}
)
gridItemBgColorELement.addEventListener('change', update);
toggleModeBtn.addEventListener('click',()=> {
  if(!eraseState){
    toggleModeBtn.textContent = 'Draw';
    drawingColor =gridItemBgColorELement.value;
  }
  else{
    toggleModeBtn.textContent = 'Erase';
    drawingColor = penColor.value;
  }
  eraseState =!eraseState;
});

rainbowButton.addEventListener('click',()=>{
  if(!rainbowMode)
    rainbowButton.textContent = 'Normal';
  else
    rainbowButton.textContent = "Rainbow Mode"
  rainbowMode = !rainbowMode;
});