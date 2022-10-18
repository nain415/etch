const container = document.querySelector("div.container");

const gridHeight = 4;
const gridWidth = 4;

for (let i = 1; i <= gridHeight; i++) {
    // append sub containers with flexbox box model according to gridHeight
    const subContainer = document.createElement("div");
    subContainer.classList.toggle("vertical-container");
    // loop through subs & add grid boxes to them in accordance with gridWidth
}