export { getTouch, getTouches, getTouchRadius };

const TOUCH_SENSITIVITY = 3;

function getTouch(evt) {
	return getTouches(evt)[0];
}

function getTouches(evt) {
	if (evt.changedTouches && evt.changedTouches.length) {
		return evt.changedTouches;
	} else if (evt.clientX || evt.clientY) {
		return [evt];
	} else {
		return [];
	}
}

function getTouchRadius(touch, defaultR) {
	if (touch && touch.radiusX) {
		return Math.max(defaultR, TOUCH_SENSITIVITY * Math.max(touch.radiusX, touch.radiusY));
	} else {
		return defaultR;
	}
}
