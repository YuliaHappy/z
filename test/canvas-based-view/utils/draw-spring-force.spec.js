import drawSpringForce from "draw-spring-force";
import SpringForce from "spring-force";
import PointsSystem from "points-system";
import Vector from "vector";
import PointState from "point-state";
import Point from "point";
import sinon from "sinon";

chai.config.includeStack = true;

describe("Function drawSpringForce", function () {
	let mock;
	let canvasContext;

	beforeEach(function () {
		let canvas = document.createElement("canvas");
		canvasContext = canvas.getContext("2d");
		mock = sinon.mock(canvasContext);
	});

	afterEach(function () {
		mock.restore();
	});

	it("should draw spring force", function () {
		let pointA = new Point(),
			pointB = new Point(10);
		let springForce = new SpringForce(pointA, pointB);
		let pointsSystem = new PointsSystem(
			[
				new PointState(pointA),
				new PointState(pointB, new Vector(0, 50))
			],
			[springForce]
		);
		mock.expects("lineTo")
			.once();
		drawSpringForce(canvasContext, pointsSystem, springForce);
		mock.verify();
	});
});
