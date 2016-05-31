import Force from "force";
import SpringForce from "spring-force";
import Point from "point";

chai.config.includeStack = true;

let expect = chai.expect;

describe("SpringForce", function () {
	let springForce;

	beforeEach(function () {
		springForce = new SpringForce(new Point(10), new Point(5));
	});

	it("should be a Force", function () {
		expect(springForce).to.be.an.instanceof(Force);
	});
});
