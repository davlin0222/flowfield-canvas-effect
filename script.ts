window.addEventListener("load", () => {
	const canvas = document.getElementById("canvas") as HTMLCanvasElement; // Type assertion

	if (!canvas) {
		// Always check if the element was found
		console.error("Canvas element not found!");
		return;
	}

	const ctx = canvas.getContext("2d");

	if (!ctx) {
		// Also check if the context was successfully obtained
		console.error("2D rendering context not supported!");
		return;
	}

	// Now you have the canvas (HTMLCanvasElement) and ctx (CanvasRenderingContext2D)
	// with type safety! Start your drawing code here...

	ctx.fillStyle = "blue";
	ctx.fillRect(10, 10, canvas.width - 20, canvas.height - 20);
});
