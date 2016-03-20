// TODO Refactor this draft decision

import Point from "point";
import PointState from "point-state";
import PointsSystem from "points-system";
import SoftBoxForce from "soft-box-force";

import animate from "animate";

import PointsSystemView from "./__points-system-view/canvas-based-view__points-system-view";

let point = new Point();
let pointState = new PointState(point);
let softBoxForce = new SoftBoxForce();
let pointsSystem = new PointsSystem([pointState], [softBoxForce]);
let pointsSystemView = new PointsSystemView(
		document.querySelector(".canvas-based-view__points-system-view"),
		pointsSystem);

animate(function (dt) {
	pointsSystem.evolve(Math.min(0.1, dt));
	pointsSystemView.draw();
});

window.addEventListener("resize", resizeView);
window.addEventListener("orientationchange", resizeView);
document.addEventListener("DOMContentLoaded", resizeView);

function resizeView() {
	let w = window.innerWidth,
		h = window.innerHeight;
	pointsSystemView.resize(w, h);
	softBoxForce.resize(w, h);
}
