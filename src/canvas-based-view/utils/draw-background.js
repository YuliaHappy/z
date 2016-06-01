export default function drawBackground(ctx) {
	ctx.fillStyle = "white";
	ctx.lineWidth = 1;
	ctx.strokeStyle = "black";
	ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	ctx.strokeRect(1, 1, this.canvas.width - 1, this.canvas.height - 1);
}
