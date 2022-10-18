const GRIDHEIGHT = 4;
const GRIDWIDTH = 4;

const container = document.querySelector("div.container");
let containerHeight = getComputedStyle(container)['height'];
containerHeight = Number(containerHeight.substring(0,containerHeight.length-2));
let verticalHeight = containerHeight / GRIDHEIGHT;

function createGrid() {
    for (let i = 1; i <= GRIDHEIGHT; i++) {
        // append sub containers with flexbox box model according to GRIDHEIGHT
        const gridContainer = document.createElement("div");
        gridContainer.classList.add("vertical");
        gridContainer.setAttribute("id", `vertical-${i}`);
        container.appendChild(gridContainer);
        // loop through subs & add grid boxes to them in accordance with GRIDWIDTH
        for (let j = 1; j <= GRIDWIDTH; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("box");
            gridBox.setAttribute("id",`box-(${i},${j})`);
            gridContainer.appendChild(gridBox);
        };
    };
}


function alterVertHeights() {
    let verticalList = document.querySelectorAll(".vertical");
    verticalList.forEach((vert) => {
                                    console.log(vert);
                                    vert.style.setProperty("height", `${String(verticalHeight)}px`);
                                }
    );
}

createGrid();
alterVertHeights();