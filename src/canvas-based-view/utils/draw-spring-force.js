export default function drawSpringForce(ctx, springForce) {
	let pointStateA = this.pointsSystem.getPointState(springForce.pointA),
		pointStateB = this.pointsSystem.getPointState(springForce.pointB);
	ctx.beginPath();
	ctx.moveTo(pointStateA.position.x(0), pointStateA.position.x(1));
	ctx.lineTo(pointStateB.position.x(0), pointStateB.position.x(1));
	ctx.closePath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "lightgray";
	ctx.stroke();
}
