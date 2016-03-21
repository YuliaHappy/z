import Force from "force";
import DissipativeForce from "dissipative-force";
import Point from "point";
import PointState from "point-state";
import Vector from "vector";

chai.config.includeStack = true;

let expect = chai.expect;

describe("DissipativeForce", function () {
	let dissipativeForce;

	beforeEach(function () {
		dissipativeForce = new DissipativeForce();
	});

	it("should be a Force", function () {
		expect(dissipativeForce).to.be.an.instanceof(Force);
	});

	it("should have opposite to point's velocity direction", function () {
		let mass = 10;
		let point = new Point(mass);
		let state = new PointState(point, new Vector(0, 0)).moveBy(new Vector(10, -10), 1);
		let f = dissipativeForce.f(state);
		expect(f.x(0)).to.be.below(0);
		expect(f.x(1)).to.be.above(0);
	});

	it("should be proportional to point's velocity value", function () {
		let mass = 10;
		let point = new Point(mass);
		let positions = [new Vector(10, 10), new Vector(5, 15), new Vector(-20, 20)];
		let state = new PointState(point);
		positions.forEach(position => {
			let nextState = state.moveTo(position, 1);
			let v0 = state.velocity,
				f0 = dissipativeForce.f(state),
				v1 = nextState.velocity,
				f1 = dissipativeForce.f(nextState);
			if (v0.x(0)) {
				expect(f0.x(0) / v0.x(0)).to.equal(f1.x(0) / v1.x(0));
				expect(f0.x(1) / v0.x(1)).to.equal(f1.x(1) / v1.x(1));
			}
			state = nextState;
		});
	});
});
