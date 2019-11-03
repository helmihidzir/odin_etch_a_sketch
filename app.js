let blockCount = 257;
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
    for(var i = 1; i < num; i++) {
      blockDiv = document.createElement("div");
      blockDiv.className = `block`;
      blockDiv.style.border = "thin solid black";
      blockDiv.style.width = "40px";
      blockDiv.style.height = "40px";
      container.append(blockDiv);
    }
}

generateDiv(blockCount);

var allDiv = document.querySelectorAll(".block");

allDiv.forEach(function(oneDiv){
    oneDiv.addEventListener("mouseover", function(){
        oneDiv.style.background = getRandomColor();
    })
})

btnClear.addEventListener("click", function(){
    allDiv.forEach(function(oneDiv){
        oneDiv.style.background = "white";
    })
})