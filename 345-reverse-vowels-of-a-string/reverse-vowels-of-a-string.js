/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = s.split("");

    let vowels = "aeiouAEIOU";

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        // Move left until we find a vowel
        while (left < right && !vowels.includes(arr[left])) {
            left++;
        }

        // Move right until we find a vowel
        while (left < right && !vowels.includes(arr[right])) {
            right--;
        }

        // Swap the vowels
        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr.join("");
}
