export function renderCanvasEffect(canvasContext: CanvasRenderingContext2D) {
	canvasContext.strokeStyle = "gray";
	canvasContext.lineWidth = 3;
	drawLine(5, 5, 100);

	function drawLine(x: number, y: number, length: number) {
		canvasContext.beginPath();
		canvasContext.moveTo(x, y);
		canvasContext.lineTo(x + length, y + length);
		canvasContext.stroke();
	}
}
