// TODO Also implement support of desktop browsers

import Vector from "vector";
import { getTouch, getTouchRadius } from "touch-utils";

const POINTS_SYSTEM = Symbol();
const R = Symbol();
const TARGET = Symbol();
const HANDLER = Symbol();

export default class PointTouchEventEmitter {
	constructor(pointsSystem, radius = 10) {
		this[POINTS_SYSTEM] = pointsSystem;
		this[R] = radius;
	}

	get pointsSystem() {
		return this[POINTS_SYSTEM];
	}

	get target() {
		return this[TARGET];
	}

	bindTo(target) {
		if (this[TARGET]) {
			this[TARGET].removeEventListener("touchstart", this[HANDLER], false);
			this[TARGET].removeEventListener("touchend", this[HANDLER], false);
			this[TARGET].removeEventListener("touchcancel", this[HANDLER], false);
			this[TARGET].removeEventListener("touchmove", this[HANDLER], false);
		}
		this[TARGET] = target;
		this[HANDLER] = handle.bind(this);
		target.addEventListener("touchstart", this[HANDLER], false);
		target.addEventListener("touchend", this[HANDLER], false);
		target.addEventListener("touchcancel", this[HANDLER], false);
		target.addEventListener("touchmove", this[HANDLER], false);
	}
}

function handle(evt) {
	let touch = getTouch(evt),
		pointState = getPointStateInTouch.call(this, touch);
	if (pointState) {
		let customEvt = new CustomEvent("point" + evt.type, {
			detail: {
				point: pointState.point
			}
		});
		this.target.dispatchEvent(customEvt);
	}
}

function getPointStateInTouch(touch) {
	if (!touch) {
		return;
	}
	let position = new Vector(touch.clientX, touch.clientY),
		pointState = this.pointsSystem.getClosestPointState(position);
	if (pointState) {
		let distance = position.sub(pointState.position).length;
		if (distance < getTouchRadius(touch, this[R])) {
			return pointState;
		}
	}
}
