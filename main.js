const gridContainer = document.querySelector('.main-container');
const gridParent = document.querySelector("#grid");
const gridNumberElement = document.querySelector('#grid-size-value');
const penColor = document.querySelector('#pen-color-value');
const resetButton = document.querySelector('#reset');
let gridNumber = gridNumberElement.value;
let height = gridContainer.clientHeight / gridNumber;
gridNumberElement.addEventListener('change',update);
let first= true;
let resetting = false;
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
    console.log(i + 'row');
    for(let j = 0; j < gridNumber; j++){
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.id = i.toString()+j.toString();
      gridRow.appendChild(gridItem);
      console.log(j)
    }
    gridContainer.appendChild(gridRow);
  }
}
resetButton.addEventListener('click',()=> reset(true));
gridContainer.addEventListener('mouseover', function(e){
  let target = e.target;
  if(target.classList.contains('grid-item')){
    target.style.backgroundColor = penColor.value;
  }
}
)