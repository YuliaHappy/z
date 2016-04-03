const RESIZABLES_LIST = Symbol();

export default class ResizingController {
	constructor(resizables) {
		this[RESIZABLES_LIST] = resizables || [];
		window.addEventListener("resize", resize.bind(this));
		window.addEventListener("orientationchange", resize.bind(this));
		document.addEventListener("DOMContentLoaded", resize.bind(this));
	}

	register(...resizables) {
		this[RESIZABLES_LIST].push(...resizables);
	}
}

function resize() {
	let w = window.innerWidth,
		h = window.innerHeight;
	this[RESIZABLES_LIST].forEach(resizable => resizable(w, h));
}
