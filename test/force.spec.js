import Force from "force";
import Point from "point";
import PointState from "point-state";
import Vector from "vector";

chai.config.includeStack = true;

let expect = chai.expect;

describe("Force", function () {
	it("should be abstract", function () {
		let force = new Force();
		expect(force.f.bind(force)).to.throw(Error);
	});

	describe("ConstantForce", function () {

		let acceleration, constantForce;

		beforeEach(function () {
			acceleration = new Vector(10, 20);
			constantForce = Force.createConstantForce(acceleration);
		});

		it("should act with constant acceleration", function () {
			let mass = 10;
			let f = constantForce.f(new PointState(new Point(mass)));
			expect(f.x(0)).to.equal(mass * acceleration.x(0));
			expect(f.x(1)).to.equal(mass * acceleration.x(1));
		});
	});
});
