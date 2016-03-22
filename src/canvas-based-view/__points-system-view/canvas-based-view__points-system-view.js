// TODO Refactor this draft decision

import SpringForce from "spring-force";

const CANVAS = Symbol();
const POINTS_SYSTEM = Symbol();

export default class PointsSystemView {
	constructor(canvas, pointsSystem) {
		this[CANVAS] = canvas;
		this[POINTS_SYSTEM] = pointsSystem;
	}

	get canvas() {
		return this[CANVAS];
	}

	get pointsSystem() {
		return this[POINTS_SYSTEM];
	}

	resize(w, h) {
		this.canvas.width = w;
		this.canvas.height = h;
	}

	draw() {
		let ctx = this.canvas.getContext("2d");
		drawBackground.call(this, ctx);
		this.pointsSystem.forces.filter(force => force instanceof SpringForce)
				.forEach(drawSpringForce.bind(this, ctx));
		this.pointsSystem.states.forEach(drawPoint.bind(this, ctx));
	}
}

function drawBackground(ctx) {
	ctx.fillStyle = "white";
	ctx.lineWidth = 1;
	ctx.strokeStyle = "black";
	ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	ctx.strokeRect(1, 1, this.canvas.width - 1, this.canvas.height - 1);
}

function drawPoint(ctx, pointState) {
	let position = pointState.position;
	let radius = Math.max(10, Math.min(this.canvas.width, this.canvas.height) / 100);
	ctx.beginPath();
	ctx.arc(position.x(0), position.x(1),
			radius, 0, 2 * Math.PI, false);
	ctx.closePath();
	ctx.fillStyle = "lightgray";
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "black";
	ctx.stroke();
}

function drawSpringForce(ctx, springForce) {
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
