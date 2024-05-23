export function renderCanvasEffect(canvasContext) {
    canvasContext.strokeStyle = "gray";
    canvasContext.lineWidth = 3;
    drawLine(5, 5, 100);
    function drawLine(x, y, length) {
        canvasContext.beginPath();
        canvasContext.moveTo(x, y);
        canvasContext.lineTo(x + length, y + length);
        canvasContext.stroke();
    }
}
//# sourceMappingURL=render-canvas-effect.js.map