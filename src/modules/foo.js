import baz from "./baz";
console.log('From module baz >>> ', baz);

let foo = 'foo';

export default foo;
export let bar = 'bar';