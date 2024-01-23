// let arr =[1.2,3,4,1,2,2]
// const duplicates=arr.filter(Element,index,arr)

// for(let i = 0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i)
//     })
// }
// console.log("9">"11")   // true
// console.log('1'+"2"+'3')
//ways to create array
// var charcters = ['like','nike','han',1];
// console.log(charcters); /// all above
// console.log(charcters.length);   //4
// console.log(charcters[charcters.length-1]); //han
// console.log(charcters[1]) // 
////////
// var fruits = ['apple','red','yellow','green']
// fruits.push('blue');  
// console.log(fruits)  ;
// fruits.pop();
// console.log(fruits)
// fruits.splice(1,2,'orange')
// console.log(fruits)
// fruits.slice(1,2,'orange')
// console.log(fruits)
////////////////////////////////////////////////////////
// let nums=[5,6,7,8,9];
// // console.log(nums.indexOf(0));    
// for(let i= nums-1; i<nums.length;i++){
//     console.log(nums[i]);
// }
// console.log(nums[i]);
//////////////////////////////
// var d={name:'John',age:25,id:"12"}
// console.log(d) 
//    for(let c in d){
//     console.log(d[c])
//    }
//////////////////////////////prime///////
// function isprime(n){
//     if(n<2){
//         return false;

//     }
//     for(let i= 2;i<=n;i++){
//         if(n%i === 0){
//             return false;
//     }
//     }
//     return true;
// }
// console.log(isprime(3))
// function isPrime(num) {
//     if (num < 2) {
//         return false;
//     }
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function printPrimesInRange(start, end) {
//     for (let i = start; i <= end; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// printPrimesInRange(20, 100);
// function isPalindrome(number) {
//     const numString = number.toString();
//     const reversedString = numString.split('').reverse().join('');
  
//     return numString === reversedString;
//   }
//   console.log(isPalindrome(121))
  // Example usage:
//   const exampleNumber = 121;
//   if (isPalindrome(exampleNumber)) {
//     console.log(`${exampleNumber} is a palindrome.`);
//   } else {
//     console.log(`${exampleNumber} is not a palindrome.`);
//   }
////////////////////////revere////
let x = "ganesh"
let str =x.split("").reverse("").join("")

console.log(str)
