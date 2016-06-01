import Force from "force";
import SoftBoxForce from "soft-box-force";
import Vector from "vector";
import Point from "point";
import PointState from "point-state";

chai.config.includeStack = true;

let expect = chai.expect;

describe("SoftBoxForce", function () {
	let softBoxForce;
	let f;

	beforeEach(function () {
		softBoxForce = new SoftBoxForce();
		let mass = 10;
		let point = new Point(mass);
		let state = new PointState(point, new Vector(0, 0)).moveBy(new Vector(5, -5), 1);
		f = softBoxForce.f(state);
	});

	it("should be a Force", function () {
		expect(softBoxForce).to.be.an.instanceof(Force);
	});

	it("should converted from positive coordinate to 0", function () {
		expect(f.x(0)).to.equal(0);
	});

	it("should converted from negative coordinate to positive", function () {
		expect(f.x(1)).to.be.above(0);
	});
});
