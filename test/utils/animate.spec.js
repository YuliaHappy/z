import animate from "animate";
import sinon from "sinon";

var EventEmitter = require("events").EventEmitter;

chai.config.includeStack = true;

describe("Function animate", function () {
	it("function should be done", function () {
		var spy = sinon.spy(),
			emitter = new EventEmitter();

		emitter.on(animate, spy);
		emitter.emit(animate);
		spy.called.should.equal.true;
	});
});
