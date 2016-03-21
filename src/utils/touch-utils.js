export { getTouhes, getTouchRadius };

function getTouhes(evt) {
	if (evt.changedTouches && evt.changedTouches.length) {
		return evt.changedTouches;
	} else if (evt.clientX || evt.clientY) {
		return [evt];
	} else {
		return [];
	}
}

const TOUCH_SENSITIVITY = 3;

function getTouchRadius(touch, defaultR) {
	if (touch && touch.radiusX) {
		return Math.max(defaultR, TOUCH_SENSITIVITY * Math.max(touch.radiusX, touch.radiusY));
	} else {
		return defaultR;
	}
}
