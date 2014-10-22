var asap = require("./asap").default;
var later = require("./asap").later;
var xxx = require("./asap").xxx;

console.log(xxx);

asap(function() {
	console.log("hello async world!");
});
