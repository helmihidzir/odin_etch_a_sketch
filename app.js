let blockCount = 257;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
 }

function generateDiv(num) {
    var container = document.querySelector("#container");

    for(var i = 1; i < num; i++) {
      blockDiv = document.createElement("div");
      blockDiv.className = `block`;
      blockDiv.style.border = "thin solid black";
      blockDiv.style.width = "10px";
      blockDiv.style.height = "10px";
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

  