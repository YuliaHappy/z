// TODO Refactor this draft decision

import Point from "point";
import PointState from "point-state";
import PointsSystem from "points-system";
import SoftBoxForce from "soft-box-force";
import SpringForce from "spring-force";
import Vector from "vector";

import CanvasBasedView from "canvas-based-view";
import AnimationController from "animation-controller";
import ResizingController from "resizing-controller";

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

let canvasBasedView = new CanvasBasedView(
		document.querySelector(".canvas-based-view"),
		pointsSystem);

let animationController = new AnimationController();
animationController.register(dt => pointsSystem.evolve(Math.min(0.1, dt)));
animationController.register(dt => canvasBasedView.draw());
animationController.start();

let resizingController = new ResizingController();
resizingController.register(canvasBasedView.resize.bind(canvasBasedView));
resizingController.register(softBoxForce.resize.bind(softBoxForce));
