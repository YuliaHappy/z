import drawBackground from "draw-background";

chai.config.includeStack = true;
let sinon = require("sinon");

describe("Function drawBackground", function () {
	let mock;
	let obj;

	beforeEach(function () {
		obj = {
			canvas: document.createElement("canvas"),
			drawBckgr: drawBackground
		};
		mock = sinon.mock(obj);
	});

	afterEach(function () {
		mock.restore();
	});

	it("should be called once", function () {
		let canvas = obj.canvas.getContext("2d");
		mock.expects("drawBckgr").withArgs(canvas).once();
		obj.drawBckgr(canvas);
		mock.verify();
	});
});
