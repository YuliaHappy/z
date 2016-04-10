/**
 * TODO Implement PointsSystemFactory (abstract factory pattern) to generate systems
 * with different "configurations" (wheel, bridge, house, or any physical object you want)
 */

import Point from "point";
import PointState from "point-state";
import PointsSystem from "points-system";
import SoftBoxForce from "soft-box-force";
import SpringForce from "spring-force";
import Vector from "vector";

import CanvasBasedView from "canvas-based-view";
import AnimationController from "animation-controller";
import ResizingController from "resizing-controller";
import PointTouchEventEmitter from "point-touch-event-emitter";

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

let canvas = document.querySelector(".canvas-based-view"),
	canvasBasedView = new CanvasBasedView(canvas, pointsSystem);

let animationController = new AnimationController();
animationController.register(
		dt => pointsSystem.evolve(Math.min(0.1, dt)),
		canvasBasedView.draw.bind(canvasBasedView));
animationController.start();

let resizingController = new ResizingController();
resizingController.register(
		canvasBasedView.resize.bind(canvasBasedView),
		softBoxForce.resize.bind(softBoxForce));

let pointTouchEventEmitter = new PointTouchEventEmitter(pointsSystem, 10);
pointTouchEventEmitter.bindTo(canvas);

canvas.addEventListener("pointtouchstart", console.log.bind(console), true);
canvas.addEventListener("pointtouchend", console.log.bind(console), true);
