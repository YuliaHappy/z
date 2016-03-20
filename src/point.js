const M = Symbol();

export default class Point {
	constructor(m = 1) {
		if (m <= 0) {
			throw new Error("Mass should be positive number");
		}
		this[M] = m;
	}

	get m() {
		return this[M];
	}
}
