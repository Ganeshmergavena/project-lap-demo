let number = prompt('enter the number armstrong');
var temp = number;
var sum = 0;
while(temp>0){
    var digit = temp%10;
    sum += digit**3;
    temp = Math.floor(temp/10);
}
if(sum == number){
    console.log("it is arm",`${number}`)
}
else{
    console.log("not an arm");
}