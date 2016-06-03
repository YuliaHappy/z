export default function drawBackground(canvas, ctx) {
	ctx.fillStyle = "white";
	ctx.lineWidth = 1;
	ctx.strokeStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.strokeRect(1, 1, canvas.width - 1, canvas.height - 1);
}
