import isNumber from "lodash/lang/isNumber";

const COMPONENTS = Symbol();

/**
 * Immutable vector
 */
export default class Vector {
	constructor(...components) {
		if (components.length === 0) {
			throw new Error("Vector should have at least one dimension");
		}
		this[COMPONENTS] = components;
	}

	x(i) {
		return this[COMPONENTS][i];
	}

	get dim() {
		return this[COMPONENTS].length;
	}

	get length() {
		return Math.sqrt(this[COMPONENTS].map(xi => xi * xi)
				.reduce((sum, xi) => sum + xi, 0));
	}

	add(vec) {
		if (!vec || (this.dim !== vec.dim)) {
			throw new Error("Invalid argument");
		}
		return this.map((xi, i) => xi + vec.x(i));
	}

	sub(vec) {
		return this.add(vec.inv());
	}

	inv() {
		return this.map(xi => -xi);
	}

	dot(vec) {
		if (!(vec instanceof Vector) || (this.dim !== vec.dim)) {
			throw new Error("Invalid argument");
		}
		return this.map((xi, i) => xi * vec.x(i));
	}

	mul(k) {
		if (!isNumber(k)) {
			throw new Error("Invalid argument");
		}
		return this.map(xi => k * xi);
	}

	abs() {
		return this.map(xi => Math.abs(xi));
	}

	zero() {
		return this.map(xi => 0);
	}

	map(func) {
		let result = this[COMPONENTS].map(func);
		return new Vector(...result);
	}
}
