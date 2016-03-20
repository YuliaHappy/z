import Point from "point";

chai.config.includeStack = true;

let expect = chai.expect;

describe("Point", function () {

	let point;

	beforeEach(function () {
		point = new Point();
	});

	describe("\"m\" property (stands for mass)", function () {
		it("should be positive number", function () {
			expect(() => new Point(-1)).to.throw(Error);
		});
		it("should be readonly", function () {
			expect(() => {
				point.m = 10;
			}).to.throw(Error);
		});
		it("should be equal 1 by default", function () {
			expect(point.m).to.equal(1);
		});
	});
});
