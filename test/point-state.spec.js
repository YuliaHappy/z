import Point from "point";
import PointState from "point-state";
import Vector from "vector";

chai.config.includeStack = true;

let expect = chai.expect;

describe("PointState", function () {

	let pointState;

	beforeEach(function () {
		pointState = new PointState(new Point());
	});

	it("should have zero position by default", function () {
		expect(pointState.position.dim).to.equal(2);
		expect(pointState.position.x(0)).to.equal(0);
		expect(pointState.position.x(1)).to.equal(0);
	});

	it("should have zero velocity by default", function () {
		expect(pointState.velocity.dim).to.equal(2);
		expect(pointState.velocity.x(0)).to.equal(0);
		expect(pointState.velocity.x(1)).to.equal(0);
	});

	describe("\"moveTo\" method", function () {
		it("should move point to the particular position", function () {
			let newPointState = pointState.moveTo(new Vector(10, 20), 1);
			expect(newPointState.position.x(0)).to.equal(10);
			expect(newPointState.position.x(1)).to.equal(20);
		});

		it("should change point velocity appropriately", function () {
			let v = pointState.moveTo(new Vector(10, 20), 10).velocity; // dt = 10
			expect(v.x(0)).to.equal(1);
			expect(v.x(1)).to.equal(2);
		});
	});

	describe("\"moveBy\" method", function () {
		it("should move point relative to the current position", function () {
			let newPointState = pointState.moveTo(new Vector(10, 20), 1)
					.moveBy(new Vector(10, 20), 1);
			expect(newPointState.position.x(0)).to.equal(20);
			expect(newPointState.position.x(1)).to.equal(40);
		});

		it("should change point velocity appropriately", function () {
			let v = pointState.moveTo(new Vector(10, 20), 0)
					.moveBy(new Vector(50, 40), 10).velocity; // dt = 10
			expect(v.x(0)).to.equal(5);
			expect(v.x(1)).to.equal(4);
		});
	});
});
