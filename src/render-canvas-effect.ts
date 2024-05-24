export function renderCanvasEffect(canvasContext: CanvasRenderingContext2D) {
	const width = canvasContext.canvas.width;
	const height = canvasContext.canvas.height;

	const gradient = canvasContext.createLinearGradient(0, 0, width, height);
	gradient.addColorStop(0, "#227799");
	gradient.addColorStop(1, "#2233bb");
	canvasContext.strokeStyle = gradient;
	canvasContext.lineWidth = 3;

	drawGridOfLines(30, 20);

	makeEdgesFade();

	function drawGridOfLines(gridCellSize: number, lineLength: number) {
		for (
			let y = -gridCellSize;
			y < height + gridCellSize * 2;
			y += gridCellSize
		) {
			for (
				let x = -gridCellSize;
				x < width + gridCellSize * 2;
				x += gridCellSize
			) {
				const angleMultiplier = 20;
				const angle =
					(x / gridCellSize) * angleMultiplier +
					(y / gridCellSize) * angleMultiplier;
				drawLine(x, y, lineLength, angle);
			}
		}
	}
	function drawLine(
		x: number,
		y: number,
		length: number,
		angleDegrees: number
	) {
		const angleRadians = angleDegrees * (Math.PI / 180);

		const endX = x + length * Math.cos(angleRadians);
		const endY = y + length * Math.sin(angleRadians);

		canvasContext.beginPath();
		canvasContext.moveTo(x, y);
		canvasContext.lineTo(endX, endY);
		canvasContext.stroke();
	}

	function makeEdgesFade() {
		fadeSides();
		fadeTopAndBottom();
		function fadeSides() {
			// console.log("🚀 ~ fadeSides ~ fadeSides:", fadeSides);
			const gradient = canvasContext.createLinearGradient(0, 0, width, 0);
			gradient.addColorStop(0, "#000000");
			gradient.addColorStop(0.2, "transparent");
			gradient.addColorStop(0.8, "transparent");
			gradient.addColorStop(1, "#000000");
			canvasContext.fillStyle = gradient;
			canvasContext.fillRect(0, 0, width, height);
		}
		function fadeTopAndBottom() {
			const gradient = canvasContext.createLinearGradient(
				0,
				0,
				0,
				height
			);
			gradient.addColorStop(0, "#000000");
			gradient.addColorStop(0.2, "transparent");
			gradient.addColorStop(0.8, "transparent");
			gradient.addColorStop(1, "#000000");
			canvasContext.fillStyle = gradient;
			canvasContext.fillRect(0, 0, width, height);
		}
	}
}
