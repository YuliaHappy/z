import Force from "force";
import Vector from "vector";

const K = Symbol();
const W = Symbol();
const H = Symbol();

export default class SoftBoxForce extends Force {
	constructor(k = 10, w = 10, h = 10) {
		super();
		this[K] = k;
		this[W] = w;
		this[H] = h;
	}

	get k() {
		return this[K];
	}

	get bounds() {
		return new Vector(this.w, this.h);
	}

	get w() {
		return this[W];
	}

	get h() {
		return this[H]
	}

	resize(w, h) {
		this[W] = w;
		this[H] = h;
	}

	f(pointState) {
		let lowerBounds = this.bounds.mul(0.1),
			upperBounds = this.bounds.mul(0.9);
		let dr = pointState.position.map(
				(xi, i) => sigma(lowerBounds.x(i) - xi) - sigma(xi - upperBounds.x(i)));
		return dr.mul(this.k);
	}
}

function sigma(x) {
	return x > 0 ? x : 0;
}
