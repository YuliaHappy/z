import drawBackground from "draw-background";
import sinon from "sinon";

chai.config.includeStack = true;

describe("Function drawBackground", function () {
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

	it("function should draw background", function () {
		mock.expects("strokeRect")
			.withArgs(1, 1, canvas.width - 1, canvas.height - 1)
			.once();
		drawBackground(canvas, canvasContext);
		mock.verify();
	});
});
