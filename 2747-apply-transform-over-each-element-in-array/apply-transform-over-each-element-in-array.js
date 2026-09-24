/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
 var map = function(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }

    return result;
};


// Example 1
function plusone(n) {
    return n + 1;
}

let arr1 = [1, 2, 3];

console.log(map(arr1, plusone));
// Output: [2, 3, 4]


// Example 2
function plusI(n, i) {
    return n + i;
}

let arr2 = [1, 2, 3];

console.log(map(arr2, plusI));
// Output: [1, 3, 5]


// Example 3
function constant() {
    return 42;
}

let arr3 = [10, 20, 30];

console.log(map(arr3, constant));
// Output: [42, 42, 42]
    
