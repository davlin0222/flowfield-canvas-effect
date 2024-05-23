import { renderCanvasEffect } from "./src/render-canvas-effect.js";
window.addEventListener("load", () => {
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const canvasContext = canvas.getContext("2d");
    if (!canvasContext) {
        // Also check if the context was successfully obtained
        console.error("2D rendering context not supported!");
        return;
    }
    renderCanvasEffect(canvasContext);
});
//# sourceMappingURL=script.js.map