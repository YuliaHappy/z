import drawPoint from "draw-point";
import Point from "point";
import PointState from "point-state";
import Vector from "vector";

chai.config.includeStack = true;
let sinon = require("sinon");

describe("Function drawPoint", function () {
	let mock;
	let obj;

	beforeEach(function () {
		obj = {
			canvas: document.createElement("canvas"),
			drawP: drawPoint
		};
		mock = sinon.mock(obj);
	});

	afterEach(function () {
		mock.restore();
	});

	it("should be called once", function () {
		let canvas = obj.canvas.getContext("2d");
		let state = new PointState(new Point(10),
			new Vector(0, 0)).moveBy(new Vector(5, -5), 1);
		mock.expects("drawP").withArgs(canvas, state).once();
		obj.drawP(canvas, state);
		mock.verify();
	});
});
