import drawSpringForce from "draw-spring-force";
import SpringForce from "spring-force";
import Point from "point";

chai.config.includeStack = true;
let sinon = require("sinon");

describe("Function drawSpringForce", function () {
	let mock;
	let obj;

	beforeEach(function () {
		obj = {
			canvas: document.createElement("canvas"),
			drawSpForce: drawSpringForce
		};
		mock = sinon.mock(obj);
	});

	afterEach(function () {
		mock.restore();
	});

	it("should be called once", function () {
		let canvas = obj.canvas.getContext("2d");
		let springAB = new SpringForce(new Point(10), new Point(5));
		mock.expects("drawSpForce").withArgs(canvas, springAB).once();
		obj.drawSpForce(canvas, springAB);
		mock.verify();
	});
});
