import Vector from "vector";

export default class Force {
	static createConstantForce(a) {
		return new ConstantForce(a);
	}

	/**
	 * Compute force vector applied to point according to point's state
	 * @param pointState current state of the point
	 * @return force vector
	 */
	f(pointState) {
		throw new Error(`Abstract f(${pointState})`);
	}
}

const ACCELERATION = Symbol();

class ConstantForce extends Force {
	constructor(a) {
		super();
		if (!(a instanceof Vector)) {
			throw new Error("Invalid argument");
		}
		this[ACCELERATION] = a;
	}

	f(pointState) {
		return this[ACCELERATION].mul(pointState.point.m);
	}
}
