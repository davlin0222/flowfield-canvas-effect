export function renderCanvasEffect(canvasContext) {
    const width = canvasContext.canvas.width;
    const height = canvasContext.canvas.height;
    canvasContext.strokeStyle = "gray";
    canvasContext.lineWidth = 3;
    drawGridOfLines(100, 50);
    function drawGridOfLines(gridCellSize, lineLength) {
        for (let y = 0; y < height; y += gridCellSize) {
            for (let x = 0; x < width; x += gridCellSize) {
                drawLine(x, y, lineLength);
            }
        }
    }
    function drawLine(x, y, length) {
        canvasContext.beginPath();
        canvasContext.moveTo(x, y);
        canvasContext.lineTo(x + length, y + length);
        canvasContext.stroke();
    }
}
//# sourceMappingURL=render-canvas-effect.js.map