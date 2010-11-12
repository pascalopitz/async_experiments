// basic imports
var Step = require('./step/lib/step');
var T = require('./libtest').TestObj;


var ref = Step(
	function one() {
		T.testFunc(this);
	},
	function two() {
		T.testFunc(this.parallel());
		T.testElse(this.parallel());
	},
	function three(err, str, str2) {
		console.log(err, str, str2);
		var group = this.group();
		T.testFunc(group());
		T.testElse(group());
	},
	function four(err, groupres) {
		console.log(err, groupres);
		console.log('finish');
	}
);

