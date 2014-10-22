import asap, { later, xxx } from "./asap";
import print from "./print";

console.log(xxx);

console.log(print('it works'));
console.log(print('wowowowowoow'));

asap(function() {
	console.log("hello async world!");
});