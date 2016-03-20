import Vector from "vector";

chai.config.includeStack = true;

let expect = chai.expect;

describe("Vector", function () {

	let v;

	beforeEach(function () {
		v = new Vector(3, 4);
	});

	it("should have at leat one dimension", function () {
		expect(() => new Vector()).to.throw(Error);
	});

	describe("\"x\" method", function () {
		it("should return components by index", function () {
			expect(v.x(0)).to.equal(3);
			expect(v.x(1)).to.equal(4);
		});
	});

	describe("\"dim\" property", function () {
		it("should reflect number of dimensions", function () {
			expect(v.dim).to.equal(2);
		});
	});

	describe("\"length\" property", function () {
		it("should reflect euclidean length", function () {
			expect(v.length).to.equal(5);
		});
	});

	describe("\"add\" method", function () {
		it("should add only compatible vectors (same dimension count)", function () {
			expect(() => v.add(new Vector(1))).to.throw(Error);
		});
		it("should not touch original vectors and compute the new one", function () {
			let result = v.add(new Vector(1, 2));
			expect(result).to.not.equal(v);
			expect(result).to.be.an.instanceof(Vector);
		});
		it("should add original vectors", function () {
			let result = v.add(new Vector(1, 2));
			expect(result.x(0)).to.equal(3 + 1);
			expect(result.x(1)).to.equal(4 + 2);
		});
	});

	describe("\"inv\" method", function () {
		it("should not touch original vector and compute the new one", function () {
			let result = v.inv();
			expect(result).to.not.equal(v);
			expect(result).to.be.an.instanceof(Vector);
		});
		it("should invert each component by changing it's sign", function () {
			let result = v.inv();
			expect(result.x(0)).to.equal(-3);
			expect(result.x(1)).to.equal(-4);
		});
	});

	describe("\"mul\" method", function () {
		it("should not touch original vector and compute the new one", function () {
			let result = v.mul(10);
			expect(result).to.not.equal(v);
			expect(result).to.be.an.instanceof(Vector);
		});
		it("should multiply each component by coefficient", function () {
			let result = v.mul(10);
			expect(result.x(0)).to.equal(30);
			expect(result.x(1)).to.equal(40);
		});
	});

	describe("\"abs\" method", function () {
		it("should compute vector of absolute values", function () {
			let result = v.inv().abs();
			expect(result).to.not.equal(v);
			expect(result.dim).to.equal(2);
			expect(result.x(0)).to.equal(3);
			expect(result.x(1)).to.equal(4);
		});
	});

	describe("\"zero\" method", function () {
		it("should compute zero vector with the same dimension count", function () {
			let result = v.zero();
			expect(result).to.not.equal(v);
			expect(result.dim).to.equal(2);
			expect(result.x(0)).to.equal(0);
			expect(result.x(1)).to.equal(0);
		});
	});
});
