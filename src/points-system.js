const FORCES = Symbol();
const STATES = Symbol();
const POINT_STATES_MAP = Symbol();

export default class PointsSystem {
	constructor(states = [], forces = []) {
		if (!Array.isArray(states) || !Array.isArray(forces)) {
			throw new Error("Invalid argument");
		}
		this[STATES] = states;
		this[FORCES] = forces;
		this[POINT_STATES_MAP] = new Map();
		states.forEach(state => {
			this[POINT_STATES_MAP].set(state.point, state);
		});
	}

	get states() {
		return this[STATES];
	}

	get forces() {
		return this[FORCES];
	}

	getPointState(point) {
		return this[POINT_STATES_MAP].get(point);
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
