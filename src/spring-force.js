import Point from "point";
import Force from "force";

const POINT_A = Symbol();
const POINT_B = Symbol();
const K = Symbol();
const L = Symbol();

export default class SpringForce extends Force {
	constructor(pointA, pointB, k = 10, length = 100) {
		super();
		if (!(pointA instanceof Point) || !(pointB instanceof Point) || (k <= 0) || (length <= 0)) {
			throw new Error("Illegal argument");
		}
		this[POINT_A] = pointA;
		this[POINT_B] = pointB;
		this[K] = k;
		this[L] = length;
	}

	get pointA() {
		return this[POINT_A];
	}

	get pointB() {
		return this[POINT_B];
	}

	get k() {
		return this[K];
	}

	get length() {
		return this[L];
	}

	resize(length) {
		if (length <= 0) {
			throw new Error("Illegal argument");
		}
		this[L] = length;
	}

	f(pointState) {
		let dr;
		if (this.pointA === pointState.point) {
			dr = pointState.position.zero();
		} else if (this.pointB === pointState.point) {
			dr = pointState.position.zero();
		} else {
			dr = pointState.position.zero();
		}
		return dr.mul(this.k);
	}
}
