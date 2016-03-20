import requestAnimationFrame from "request-animation-frame";

export default function animate(draw) {
	let timestamp = Date.now();
	let proxy = function () {
		try {
			let currentTimestamp = Date.now();
			draw((currentTimestamp - timestamp) / 1000);
			timestamp = currentTimestamp;
		} catch (ex) {
			console.error(ex);
		}
		requestAnimationFrame(proxy);
	}
	requestAnimationFrame(proxy);
}
