export function renderCanvasEffect(canvasContext: CanvasRenderingContext2D) {
	const width = canvasContext.canvas.width;
	const height = canvasContext.canvas.height;

	canvasContext.strokeStyle = "gray";
	canvasContext.lineWidth = 3;
	drawGridOfLines(100, 50);
	function drawGridOfLines(gridCellSize: number, lineLength: number) {
		for (let y = 0; y < height; y += gridCellSize) {
			for (let x = 0; x < width; x += gridCellSize) {
				drawLine(x, y, lineLength);
			}
		}
	}
	function drawLine(x: number, y: number, length: number) {
		canvasContext.beginPath();
		canvasContext.moveTo(x, y);
		canvasContext.lineTo(x + length, y + length);
		canvasContext.stroke();
	}
}
