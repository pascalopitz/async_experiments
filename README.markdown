# An experiment with Step and async

The problem is the callback bonanza:

	doStuff(function(ret) {
		moreStuff(function(ret2) {
			andEvenMoreStuff(function(ret3) {
				console.log(ret, ret2, ret3);
			})
		});
	})
	
This would be cooler chained up.
Both, Step and async provide measures to do this.

## Observations

The common node convention is 

callback = function(err, res1, res2, res3 ...) {};

Sticking to that makes things easier.
