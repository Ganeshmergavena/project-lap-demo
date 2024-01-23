let p = new Promise((r,rt ) => {
    let a = 2;
    if(a == 22){
        r("success");
        
    }
    else{
        rt('falled')
    }
   
})
p.then((results)=>{
    console.log("it is true",results)
}).catch((error)=>{
    console.log("is error",error)
})
////////////////////////////////////////////////////  resolution of promises
const delayedReject = (message, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(message);
        }, delay);
    });
};

delayedReject("Delayed failure!", 2000)
    .then((result) => {
        console.log(result); // This will not be executed for a rejected promise
    })
    .catch((error) => {
        console.error(error); // This block will be executed for a rejected promise
    });
