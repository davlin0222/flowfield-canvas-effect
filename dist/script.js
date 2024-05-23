window.addEventListener("load", () => {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        // Also check if the context was successfully obtained
        console.error("2D rendering context not supported!");
        return;
    }
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, canvas.width - 20, canvas.height - 20);
});
//# sourceMappingURL=script.js.map