"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapInArray(item) {
    return [item];
}
var numberArray = wrapInArray(42); // [42]
var stringArray = wrapInArray("Hello"); // ["Hello"]
var booleanArray = wrapInArray(true); // [true]

console.log(numberArray);
console.log(stringArray);
console.log(booleanArray);

