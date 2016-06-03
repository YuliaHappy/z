import drawPoint from "draw-point";
import Point from "point";
import PointState from "point-state";
import Vector from "vector";
import sinon from "sinon";

chai.config.includeStack = true;

describe("Function drawPoint", function () {
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
	});

	it("function should draw point", function () {
		let state = new PointState(new Point(10),
			new Vector(10, 15), 1);
		let radius = Math.max(10,
			Math.min(canvas.width, canvas.height) / 100);
		mock.expects("arc")
			.withArgs(10, 15, radius, 0, 2 * Math.PI, false)
			.once();
		drawPoint(canvas, canvasContext, state);
		mock.verify();
	});
});
