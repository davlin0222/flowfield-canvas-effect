export function renderCanvasEffect(canvasContext: CanvasRenderingContext2D) {
	canvasContext.fillStyle = "green";
	canvasContext.fillRect(
		10,
		10,
		canvasContext.canvas.width - 20,
		canvasContext.canvas.height - 20
	);
}
