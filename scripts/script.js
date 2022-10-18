let GRIDHEIGHT = 4;
let GRIDWIDTH = 4;
const container = document.querySelector("div.container");

function main(w=GRIDWIDTH) {
    let containerHeight = getComputedStyle(container)['height'];
    containerHeight = Number(containerHeight.substring(0,containerHeight.length-2));
    let verticalHeight = containerHeight / GRIDHEIGHT;

    // loop through subs & add grid boxes to them in accordance with w
    for (let j = 1; j <= w; j++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("box");
    gridBox.setAttribute("id",`box-(${i},${j})`);
    gridContainer.appendChild(gridBox);
    };

    function alterVertHeights() {
        let verticalList = document.querySelectorAll(".vertical");
        verticalList.forEach((vert) => {
                                        vert.style.setProperty("height", `${String(verticalHeight)}px`);
                                    }
        );
    }

    function addHoverAttr() {
        boxes = document.querySelectorAll(".box");
        boxes.forEach(box => box.addEventListener("mouseover", () => box.classList.add("hovered")));
    }

    function attachSizeListener() {
        sizeButton = document.querySelector('button#change-size');
        console.log(sizeButton);
        sizeButton.addEventListener("click", () => {
            const size = Number(prompt("Specify NUM to make NUMxNUM grid", 10));
            clearGrid();
            main(size);
        });
    }

    function clearGrid() {
        boxes = document.querySelectorAll(".box");
        boxes.forEach(box => box.remove());
    }

    createGrid();
    alterVertHeights();
    addHoverAttr();
    attachSizeListener();
}

function createGrid() {
    for (let i = 1; i <= GRIDHEIGHT; i++) {
        // append sub containers with flexbox box model according to GRIDHEIGHT
        const gridContainer = document.createElement("div");
        gridContainer.classList.add("vertical");
        gridContainer.setAttribute("id", `vertical-${i}`);
        container.appendChild(gridContainer);
    }
}

createGrid();
main();