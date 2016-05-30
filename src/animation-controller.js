import animate from "animate";

const ANIMATABLES_LIST = Symbol();
const STARTED = Symbol();

export default class AnimationController {
	constructor() {
		this[ANIMATABLES_LIST] = [];
		this[STARTED] = false;
		animate(dt => {
			if (this[STARTED]) {
				this[ANIMATABLES_LIST].forEach(animatable => animatable(dt));
			}
		});
	}

	register(...animatables) {
		this[ANIMATABLES_LIST].push(...animatables);
	}

	start() {
		this[STARTED] = true;
	}

	stop() {
		this[STARTED] = false;
	}
}
