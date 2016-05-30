import Force from "force";
import SoftBoxForce from "soft-box-force";
import Vector from "vector";
import Point from "point";
import PointState from "point-state";

chai.config.includeStack = true;

let expect = chai.expect;

describe("SoftBoxForce", function () {
	let softBoxForce;

	beforeEach(function () {
		softBoxForce = new SoftBoxForce();
	});

	it("should be a Force", function () {
		expect(softBoxForce).to.be.an.instanceof(Force);
	});

	it("should have opposite to point's velocity direction", function () {
		let mass = 10;
		let point = new Point(mass);
		let state = new PointState(point, new Vector(0, 0)).moveBy(new Vector(10, -10), 1);
		let f = softBoxForce.f(state);
		expect(f.x(0)).to.be.below(0);
		expect(f.x(1)).to.be.above(0);
	});
});
