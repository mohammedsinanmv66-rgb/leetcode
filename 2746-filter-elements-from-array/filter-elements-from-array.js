/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function filter(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }

    return result;
}
const arr = [0, 10, 20, 30];

function greaterThan10(n) {
    return n > 10;
}

console.log(filter(arr, greaterThan10));
const hello = [1, 2, 3];

function firstIndex(n, i) {
    return i === 0;
}
const sinan = [-2, -1, 0, 1, 2];

function plusOne(n) {
    return n + 1;
}

console.log(filter(arr, plusOne));
console.log(filter(arr, firstIndex));




