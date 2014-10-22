import asap, { later, xxx } from "./asap";
import print from "./print";

console.log(xxx);

console.log(print('wowowowowow'));

asap(function() {
	console.log("hello async world!");
});