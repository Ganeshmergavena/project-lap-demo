// // print two numbers add  100
// function eqaualto100(a,b){
//     if(a=== 100 || b === 100  || (a+b) === 100 ||Math.abs (a-b) === 100)
//     return true;
// else
// return false;
// }
// console.log(eqaualto100(50,70));//false
// console.log(eqaualto100(100,200));//true

//////// dupilcate of numberess
// function isfractorial(n){
//     result = 1
//     for(i = 1 ; i<=n;i++){
//     result *= i;
// }
// return result
// }

// console.log(isfractorial(5));
    ////////////////
//   let word = "mafgbndam";
//   let letter =  word.split('').reverse().join('');
//   console.log(letter === word)
//   console.log(`The reversed version of ${word} is: ${letter}`);
// let num = 1231;
// let rem = 0;
// let rever = 0;
// while (num > 0) {
//     rem = num % 10;
//     rever = rever*10 + rem;
//     num = Math.floor(num / 10);
//     }
//     console.log(rever);
// /////// 
// let fruits = ['apple','bana','oran','grapes','lemon','apple']
// const uniques = [...new Set(fruits)]
// const uniques = new Set(fruits)
// console.log(uniques)


// let x = [1,2,3,3,2,1,]
// // let y =[...new Set(x)]
// let y =
// console.log(y);
// for(let i=0 ; i<x.length ; i++){
//     if(y.indexOf(x[i]) === -1){
//             y.push(x[i])
//     }
// }
// console.log(y);
let x = 927;
// let rem = 0;
let rev = 0;
while(x>0){
    rem = x%10;
    rev = rev*10+rem;
    x = (x/10);
}
console.log(rev)

