const container = document.querySelector("div.container");

const gridHeight = 4;
const gridWidth = 4;

for (let i = 1; i <= gridHeight; i++) {
    // append sub containers with flexbox box model according to gridHeight
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("vertical");
    gridContainer.setAttribute("id", `vertical-${i}`)
    container.appendChild(gridContainer);
    // loop through subs & add grid boxes to them in accordance with gridWidth
    for (let j = 1; j <= gridWidth; j++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("box");
        gridBox.setAttribute("id",`box-(${i},${j})`);
        gridContainer.appendChild(gridBox);
    }
}