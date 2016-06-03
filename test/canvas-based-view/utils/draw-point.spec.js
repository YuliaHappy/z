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

	it("should draw point", function () {
		let state = new PointState(new Point(10),
			new Vector(10, 15), 1);
		mock.expects("arc")
			.once();
		drawPoint(canvas, canvasContext, state);
		mock.verify();
	});
});
