import Point from "point";
import Vector from "vector";
import _ from "lodash";

const POINT = Symbol();
const POSITION = Symbol();
const PREV_STATE = Symbol();
const DT = Symbol();

/**
 * Immutable point state
 */
export default class PointState {
	constructor(point, position = new Vector(0, 0)) {
		if (!(point instanceof Point) || !(position instanceof Vector)) {
			throw new Error("Invalid argument");
		}
		this[POINT] = point;
		this[POSITION] = position;
	}

	get point() {
		return this[POINT];
	}

	get position() {
		return this[POSITION];
	}

	get dt() {
		return this[DT];
	}

	get prev() {
		return this[PREV_STATE] || this;
	}

	get velocity() {
		if (this.dt) {
			return this.position.sub(this.prev.position).mul(1 / this.dt);
		} else {
			return this.position.zero();
		}
	}

	moveTo(r, dt) {
		if (!(r instanceof Vector) || !_.isNumber(dt)) {
			throw new Error("Invalid argument");
		}
		return next(this, r, dt);
	}

	moveBy(dr, dt) {
		if (!(dr instanceof Vector) || !_.isNumber(dt)) {
			throw new Error("Invalid argument");
		}
		let r = this.position.add(dr);
		return next(this, r, dt);
	}
}

/**
 * Create new point state and link to the previous one
 */
function next(prevState, position, dt) {
	if (!(prevState instanceof PointState) || !(position instanceof Vector) || !_.isNumber(dt)) {
		throw new Error("Invalid argument");
	}
	let result = new PointState(prevState.point, position);
	result[DT] = dt;
	result[PREV_STATE] = prevState;
	restrictTrajectory(result);
	return result;
}

/*
 * Restrict trajectory to last free "moments
 */
function restrictTrajectory(pointState) {
	let thirdState = pointState.prev.prev;
	thirdState[PREV_STATE] = null;
}
