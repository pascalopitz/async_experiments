var async = require('./async/lib/async');
var T = require('./libtest').TestObj;


async.waterfall([
    T.testFunc,
    function(str, callback) { 
		console.log(str);
		T.testElse(callback) 
	},
],
function(err, results){
	console.log(err, results);
});