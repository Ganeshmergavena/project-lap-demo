// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// // reverseString('hell0')
// console.log(reverseString('hell0'))
// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[4]);
// function reverses(str){
//     var nstring =[];
//     for(var i =str.length-1;i>=0;i--){
//         nstring += str[i];
    
//     }
//     return nstring
// }
// console.log(reverses('ganesh'))
// console.log('hello start')
// function abc(){
//     console.log('inner hello')
// }
// abc()
// console.log('hello end')
// abc()
const fetchData = () => {
    return fetch('https://json-data-7yz0.onrender.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched data:', data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
};

fetchData();
