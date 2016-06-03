// TODO Refactor view layer to meet better architecture. Use *MVC* pattern.

import SpringForce from "spring-force";
import drawBackground from "draw-background";
import drawPoint from "draw-point";
import drawSpringForce from "draw-spring-force";

const CANVAS = Symbol();
const POINTS_SYSTEM = Symbol();

export default class CanvasBasedView {
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
		drawBackground.call(this, this.canvas, ctx);
		this.pointsSystem.forces.filter(force => force instanceof SpringForce)
				.forEach(drawSpringForce.bind(this, ctx, this.pointsSystem));
		this.pointsSystem.states.forEach(drawPoint.bind(this, this.canvas, ctx));
	}
}
