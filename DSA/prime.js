// // check weather prime r not
// function isprime(n){
//     if (n < 2){
//         return false
//     }
//     for(let i= 2; i< n;i++){
//         if(n % i === 0) {
//             return false
//     }
// }
//     return true 

// }
// console.log(isprime(1));
//  console.log(isprime(2))
/////////////////////////////////////////////////
function isprime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function printPrimesUpToN(start,end) {
    for (let i = start; i<= end; i++) {
        if (isprime(i)) {
            console.log(i);
        }
    }
}

// Call the function directly without console.log
printPrimesUpToN(20,30);
