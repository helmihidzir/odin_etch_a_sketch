let blockCount = 257;

function generateDiv(num) {
    var container = document.querySelector("#container");

    for(var i = 1; i < num; i++) {
      blockDiv = document.createElement("div");
      blockDiv.className = `block${i}`;
    //   blockDiv.style.background = "white";
      blockDiv.style.border = "thin solid black";
      blockDiv.style.width = "10px";
      blockDiv.style.height = "10px";
      container.append(blockDiv);
    }
}

generateDiv(blockCount);