import asap, { later, xxx } from "./asap";

console.log(xxx);

asap(function() {
	console.log("hello async world!");
});