import Force from "force";
import SpringForce from "spring-force";
import Point from "point";
import PointState from "point-state";
import PointsSystem from "points-system";
import Vector from "vector";

chai.config.includeStack = true;

let expect = chai.expect;

describe("SpringForce", function () {
	let springForce;
	var pointA;
	var pointB;

	beforeEach(function () {
		pointA = new Point(5);
        pointB = new Point(10);
		springForce = new SpringForce(pointA, pointB);
	});

	it("should be a Force", function () {
		expect(springForce).to.be.an.instanceof(Force);
	});

	it("should have same to state's velocity direction", function () {
        var state1 = new PointState(pointA, new Vector(0, 0)).moveBy(new Vector(10, -10), 1);
        var state2 = new PointState(pointB, new Vector(0, 0)).moveBy(new Vector(-5, 7), 1);
        var system = new PointsSystem([state1, state2]);
        var f = springForce.f(state1, system);
        expect(f.x(0)).to.be.above(0);
        expect(f.x(1)).to.be.below(0);
    });
});
