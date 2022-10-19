let GRIDHEIGHT = 4;
let GRIDWIDTH = 4;
const container = document.querySelector("div.container");

function main(w=GRIDWIDTH) {
    let containerHeight = getComputedStyle(container)['height'];
    containerHeight = Number(containerHeight.substring(0,containerHeight.length-2));
    let gridContainers = document.querySelectorAll('.vertical');
    let verticalHeight = containerHeight / gridContainers.length;


    for (gridContainer of gridContainers) {
    // loop through subs & add grid boxes to them in accordance with w
        for (let j = 1; j <= w; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("box");
            // gridBox.setAttribute("id",`box-(${i},${j})`);
            gridContainer.appendChild(gridBox);
        };
    };

    function setVertHeights() {
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

    setVertHeights();
    addHoverAttr();
}

function createGrid(h=GRIDHEIGHT) {
    for (let i = 1; i <= h; i++) {
        // append sub containers with flexbox box model according to GRIDHEIGHT
        const gridContainer = document.createElement("div");
        gridContainer.classList.add("vertical");
        gridContainer.setAttribute("id", `vertical-${i}`);
        container.appendChild(gridContainer);
    }
}

function attachSizeListener() {
    sizeButton = document.querySelector('button#change-size');
    console.log(sizeButton.getAttribute("listener"));
    sizeButton.addEventListener("click", resizeClicked);
}

function resizeClicked() {
    
    let size = Number(prompt("Specify NUM to make NUMxNUM grid", 10));
    while (size > 100) {
        alert("Max value of 100.  Please specify another entry.")
        size = Number(prompt("Specify NUM to make NUMxNUM grid", 10));
    }

    clearGrid();
    createGrid(size);
    main(size);
}

function clearGrid() {
    boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.remove());
    let gridContainers = document.querySelectorAll('.vertical');
    for (grid of gridContainers) {
        grid.remove();
    };
}

createGrid();
attachSizeListener();
main();