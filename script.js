const colorPicker = document.getElementById("colorPicker");
const canvasColor = document.getElementById("canvasColor");
const canvas = document.getElementById("myCanvas");
const clearButton = document.getElementById("clearButton");
const saveButton = document.getElementById("saveButton");
const fontPicker = document.getElementById("fontPicker");
const retrieveButton = document.getElementById('retrieveButton');
const undoButton = document.getElementById('undoButton');
const redoButton = document.getElementById('redoButton');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let drawingActions = [];
let currentActionIndex = -1;

colorPicker.addEventListener("change", (e) => {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
})

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        drawLine(lastX, lastY, e.offsetX, e.offsetY);
        lastX = e.offsetX;
        lastY = e.offsetY;
    }
})

canvas.addEventListener("mouseup", () => {
    if (isDrawing) {
        saveDrawingAction();
    }
    isDrawing = false;
})

canvasColor.addEventListener('change', (e) => {
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0, 0, 800, 500);
})

fontPicker.addEventListener('change', (e) => {
    ctx.lineWidth = e.target.value;
})

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawingActions = [];
    currentActionIndex = -1;
})

saveButton.addEventListener('click', () => {
    localStorage.setItem('canvasContents', canvas.toDataURL());
    let link = document.createElement("a");
    link.download = 'my-convas.png';
    link.href = canvas.toDataURL();
    link.click();
})

retrieveButton.addEventListener('click', () => {
    let savedCanvas = localStorage.getItem('canvasContents');
    if (savedCanvas) {
        let img = new Image();
        img.src = savedCanvas;
        ctx.drawImage(img, 0, 0);
    }
})

undoButton.addEventListener('click', () => {
    if (currentActionIndex > 0) {
        currentActionIndex--;
        redrawCanvas();
    }
})

redoButton.addEventListener('click', () => {
    if (currentActionIndex < drawingActions.length - 1) {
        currentActionIndex++;
        redrawCanvas();
    }
})

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function saveDrawingAction() {
    currentActionIndex++;
    drawingActions.splice(currentActionIndex);
    drawingActions.push(canvas.toDataURL());
}


function redrawCanvas() {
    let img = new Image();
    img.src = drawingActions[currentActionIndex];
    img.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
    };
}
