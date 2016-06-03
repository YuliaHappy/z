import CanvasBasedView from "canvas-based-view";
import Vector from "vector";
import Point from "point";
import PointState from "point-state";
import PointsSystem from "points-system";
import SpringForce from "spring-force";
import sinon from "sinon";

chai.config.includeStack = true;

describe("CanvasBasedView", function () {
	let mock;
	let canvas;
	let canvasContext;

	beforeEach(function () {
		canvas = document.createElement("canvas");
		canvasContext = canvas.getContext("2d");
		mock = sinon.mock(canvasContext);
	});

	afterEach(function () {
		mock.restore();
	})

	it("CanvasBasedView should draw ", function () {
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
		let canvasBasedView = new CanvasBasedView(canvas, pointsSystem);
		mock.expects("strokeRect").once();
		mock.expects("arc").twice();
		mock.expects("lineTo").once();
		canvasBasedView.draw();
		mock.verify();
	});
});
