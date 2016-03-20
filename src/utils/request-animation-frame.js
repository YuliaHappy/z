export default window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		requestAnimationFrameFallback;

function requestAnimationFrameFallback(callback) {
	window.setTimeout(callback, parseInt(1000 / 60, 10));
}
