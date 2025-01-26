
const container = document.querySelector(".container");
const square = document.getElementsByClassName("square");
const btn = document.querySelector("#btn")
const rows = 4;
const cols = 4;
makeGrid(4,4)
function makeGrid (rows,cols) {
    container.innerHTML = ""
    for(let i = 1 ; i<=rows; i++){
        const row = document.createElement("div");
        row.className = 'row';
        container.append(row)

    for(let j = 1; j<= cols; j++) {
        const square = document.createElement('div');
        square.className = "square";
        square.addEventListener("mouseover", function(){
            square.style.backgroundColor = "yellow"
        })
        row.append(square)
    }
    }
}

function askGridSize() {
    return prompt("Enter the size of the grid")
}

function createGrid() {
    const gridSize = askGridSize()
    makeGrid(gridSize,gridSize)
    if(gridSize>100){
        alert("Enter a value below 100")
    }
}
btn.addEventListener('click',createGrid)