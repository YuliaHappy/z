import Force from "force";
import GravityForce from "gravity-force";
import Point from "point";
import PointState from "point-state";
import Vector from "vector";

chai.config.includeStack = true;

let expect = chai.expect;

describe("GravityForce", function () {
	let gravityForce;

	beforeEach(function () {
		gravityForce = new GravityForce();
	});

	it("should be a Force", function () {
		expect(gravityForce).to.be.an.instanceof(Force);
	});

	it("should act with constant acceleration", function () {
		let mass = 10;
		let point = new Point(mass);
		let positions = [new Vector(10, 10), new Vector(5, 10), new Vector(-20, 20)];
		let state = new PointState(point);
		positions.forEach(position => {
			let nextState = state.moveTo(position, 1);
			let f0 = gravityForce.f(state),
				f1 = gravityForce.f(nextState);
			expect(f0.x(0)).to.equal(f1.x(0));
			expect(f0.x(1)).to.equal(f1.x(1));
			state = nextState;
		});
	});
});
