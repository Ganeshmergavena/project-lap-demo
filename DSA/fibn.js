// function fib(n){
//     let f =[1,0]
//     for(let i=2;i<=n;i++){
//         f.push(f[i-1]+f[i-2])
//     }
//     return f
// }
// console.log(fib(5))
// function fib(n){
//     if (n===1 || n===0){
//         return n
//     }
//     var a=0,b=1,temp
//     for(let  i=3;i<=n;i++ ){
//         temp=a;
//         a=b;
//         b+=temp;
//     }
//   return b
// }
// console.log(fib(9));
//////////////////////////////////////////////recursive////////
// let x =((n)=>{
//     if(n === 0 ||n ===1){
//         return n;
//     }
//     else{
//         return x(n - 1) + x(n - 2);

//     }

// })
// console.log(x(9))
