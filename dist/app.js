var asap = require("./asap").default;
var later = require("./asap").later;
var xxx = require("./asap").xxx;
var print = require("./print").default;

console.log(xxx);

console.log(print('wowowowowow'));

asap(function() {
	console.log("hello async world!");
});
