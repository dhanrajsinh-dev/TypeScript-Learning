"use strict";
// export function add(a: number, b: number) {
//   return a + b;
// }
// export function sub(a: number, b: number) {
//   return a - b;
// }
// Splitting Namespace Across Files
var MathUtils;
(function (MathUtils) {
    function add(a, b) {
        return a + b;
    }
    MathUtils.add = add;
})(MathUtils || (MathUtils = {}));
var MathUtils;
(function (MathUtils) {
    function multiple(a, b) {
        return a * b;
    }
    MathUtils.multiple = multiple;
})(MathUtils || (MathUtils = {}));

console.log(MathUtils)