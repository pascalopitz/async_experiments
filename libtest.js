var events = require('events');

function Dummy() {
    events.EventEmitter.call(this);
}

// inherit events.EventEmitter
Dummy.super_ = events.EventEmitter;
Dummy.prototype = Object.create(events.EventEmitter.prototype, {
    constructor: {
        value: Dummy,
        enumerable: false
    }
});

Dummy.prototype.doThat = function() {
	var self = this;
	
	setTimeout(function() {
		self.emit('done', 'foo');
	}, 1000);
}

Dummy.prototype.doElse = function() {
	var self = this;
	
	setTimeout(function() {
		self.emit('done', 'bar');
	}, 1000);
}

exports.TestObj = new function() {
	
	this.testFunc = function(callback) {
		var d = new Dummy();
		d.addListener('done', function(str) {
			callback(null, str);
		});
		d.addListener('error', function(str) {
			callback(str);
		});
		d.doThat();
	}

	this.testElse = function(callback) {
		var d = new Dummy();
		d.addListener('done', function(str) {
			callback(null, str);
		});
		d.addListener('error', function(str) {
			callback(str);
		});
		d.doElse();
	}
}