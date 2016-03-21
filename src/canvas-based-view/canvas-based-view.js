// TODO Refactor this draft decision

import Point from "point";
import PointState from "point-state";
import PointsSystem from "points-system";
import SoftBoxForce from "soft-box-force";
import SpringForce from "spring-force";
import Vector from "vector";

import animate from "animate";

import PointsSystemView from "./__points-system-view/canvas-based-view__points-system-view";

let pointA = new Point(),
	pointB = new Point(),
	pointC = new Point();
let pointStateA = new PointState(pointA),
	pointStateB = new PointState(pointB, new Vector(0, 100)),
	pointStateC = new PointState(pointC, new Vector(100, 0));
let softBoxForce = new SoftBoxForce();
let springAB = new SpringForce(pointA, pointB),
	springBC = new SpringForce(pointB, pointC),
	springCA = new SpringForce(pointC, pointA);
let pointsSystem = new PointsSystem([pointStateA, pointStateB, pointStateC],
		[softBoxForce, springAB, springBC, springCA]);
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
