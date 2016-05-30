/**
 * TODO Implement DissipativeForce = -k*velocity
 */
import Force from "force";

const K = Symbol();

export default class DissipativeForce extends Force {
    constructor(k = 1) {
        super();
        this[K] = k;
    }

    get k() {
        return this[K];
    }

    f(pointState, pointsSystem) {
        return pointState.velocity.mul((-1) * this.k);
    }
}
