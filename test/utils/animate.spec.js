import animate from "animate";
import Point from "point";
import PointState from "point-state";
import PointsSystem from "points-system";
import GravityForce from "gravity-force";

chai.config.includeStack = true;
// let expect = chai.expect;

// let sinon = require("sinon");
// let sinonChai = require("sinon-chai");
// chai.use(sinonChai);

describe("Function animate", function () {
	it("should call the callback function", function (done) {
		// let callback = sinon.spy();

		let pointA = new Point();
		let pointStateA = new PointState(pointA);
		let gravity = new GravityForce();
		let pointsSystem = new PointsSystem([pointStateA], [gravity]);
		let animatablesList = [
			dt => pointsSystem.evolve(Math.min(0.1, dt)),
			dt => pointsSystem.evolve(Math.min(0.5, dt))
		];
		animate(dt => animatablesList.forEach(animatable => animatable(dt)), done());
		// expect(callback).to.have.been.calledOnce();
	});
});
