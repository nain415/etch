const GRIDHEIGHT = 4;
const GRIDWIDTH = 4;

const container = document.querySelector("div.container");

for (let i = 1; i <= GRIDHEIGHT; i++) {
    // append sub containers with flexbox box model according to GRIDHEIGHT
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("vertical");
    gridContainer.setAttribute("id", `vertical-${i}`)
    container.appendChild(gridContainer);
    // loop through subs & add grid boxes to them in accordance with GRIDWIDTH
    for (let j = 1; j <= GRIDWIDTH; j++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("box");
        gridBox.setAttribute("id",`box-(${i},${j})`);
        gridContainer.appendChild(gridBox);
    }
}