export function renderCanvasEffect(canvasContext) {
    const width = canvasContext.canvas.width;
    const height = canvasContext.canvas.height;
    const gradient = canvasContext.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#227799");
    gradient.addColorStop(1, "#2233bb");
    canvasContext.strokeStyle = gradient;
    canvasContext.lineWidth = 3;
    drawGridOfLines(100, 50);
    function drawGridOfLines(gridCellSize, lineLength) {
        for (let y = 0; y < height; y += gridCellSize) {
            for (let x = 0; x < width; x += gridCellSize) {
                drawLine(x, y, lineLength, (x / gridCellSize) * 10);
            }
        }
    }
    function drawLine(x, y, length, angleDegrees) {
        const angleRadians = angleDegrees * (Math.PI / 180);
        const endX = x + length * Math.cos(angleRadians);
        const endY = y + length * Math.sin(angleRadians);
        canvasContext.beginPath();
        canvasContext.moveTo(x, y);
        canvasContext.lineTo(endX, endY);
        canvasContext.stroke();
    }
}
//# sourceMappingURL=render-canvas-effect.js.map