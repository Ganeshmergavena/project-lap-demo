// same sa forward and backward
//  function palindrome (number){
//     let str = number.toString();
//     let reverseStr = str.split('').reverse().join('');
//     return str === reverseStr;
// }
// console.log(palindrome(125))
 function isPalindromeNumber(number) {
    // Convert the number to a string
    const numStr = number.toString();

    // Reverse the string
    const reversedNumStr = numStr.split('').reverse().join('');

   
    return numStr === reversedNumStr;
}

console.log(isPalindromeNumber(121));   // true
console.log(isPalindromeNumber(12321)); // true
console.log(isPalindromeNumber(12345)); // false
