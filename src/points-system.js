const FORCES = Symbol();
const STATES = Symbol();

export default class PointsSystem {
	constructor(states = [], forces = []) {
		if (!Array.isArray(states) || !Array.isArray(forces)) {
			throw new Error("Invalid argument");
		}
		this[STATES] = states;
		this[FORCES] = forces;
	}

	get states() {
		return this[STATES];
	}

	evolve(dt) {
		let states = this[STATES];
		let nextStates = states.map(pointState => evolvePointState.call(this, pointState, dt));
		this[STATES] = nextStates;
		return nextStates;
	}
}

function evolvePointState(pointState, dt) {
	let f = computeForce.call(this, pointState);
	let m = pointState.point.m;
	let dv = f.mul(dt / m);              // f = ma; a = dv / dt
	let v = dv.add(pointState.velocity); // dv = v1 - v0
	let dr = v.mul(dt);                  // v = dr / dt
	return pointState.moveBy(dr, dt);
}

function computeForce(pointState) {
	return this[FORCES].map(force => force.f(pointState))
			.reduce((sum, f) => sum.add(f), pointState.position.zero());
}
