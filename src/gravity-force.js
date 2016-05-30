/**
 * TODO Implement GravityForce = m*g
 */
import Force from "force";
import Vector from "vector";

const G = Symbol();

export default class GravityForce extends Force {
    constructor() {
        super();
        this[G] = new Vector(0, 10);
    }
    f(pointState) {
        return this[G].mul(pointState.point.m);
    }
}
