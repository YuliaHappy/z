import { animate } from "animate";
import Point from "point";
import PointState from "point-state";
import PointsSystem from "points-system";
import GravityForce from "gravity-force";
import Vector from "vector";
import CanvasBasedView from "canvas-based-view";

chai.config.includeStack = true;

let expect = chai.expect;

describe("Function animate", function () {
	it("should animate", function (done) {
		let pointA = new Point();
		let pointStateA = new PointState(pointA);
		let gravity = new GravityForce();
		let pointsSystem = new PointsSystem([pointStateA], [gravity]);
		let canvasBasedView = new CanvasBasedView(canvas, pointsSystem);
		let canvas = document.querySelector(".canvas-based-view");
		let animatablesList = [
			dt => pointsSystem.evolve(Math.min(0.1, dt)),
			canvasBasedView.draw.bind(canvasBasedView)
		];
		
		animate(dt => animatablesList.forEach(animatable => animatable(dt)));
		done();
	});
});
