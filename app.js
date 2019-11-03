var blockCount = 256;
var container = document.querySelector("#container");
var btnClear = document.querySelector(".btnClear");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
 }

function generateDiv(num) {
    for(let i = 0; i < num; i++) {
      blockDiv = document.createElement("div");
      blockDiv.className = "block";
      blockDiv.style.border = "thin solid black";
      blockDiv.style.width = "40px";
      blockDiv.style.height = "40px";
      container.append(blockDiv);
    }
}

generateDiv(blockCount);

var allDiv = document.querySelectorAll(".block");
function colouring(allDiv){
    allDiv.forEach(function(oneDiv){
        oneDiv.addEventListener("mouseover", function(){
            oneDiv.style.background = getRandomColor();
        })
    })
}

colouring(allDiv);

btnClear.addEventListener("click", function(){
    allDiv.forEach(function(oneDiv){
        oneDiv.style.background = "white";
    })
    var newGrid = prompt("Please enter a number for a new set of grid");
    container.innerHTML = "";
    generateDiv(Math.pow(newGrid, 2));
    container.style.gridTemplateColumns = "repeat("+newGrid+", 42px)";
    container.style.gridTemplateRows = "repeat("+newGrid+", 42px)";
    var newAllDiv = document.querySelectorAll(".block");
    colouring(newAllDiv);
})


colouring(allDiv);
