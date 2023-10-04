//Aroow Funtion
// arrow funtion is saame just like function functionality just syntex is diffrent
// it is also known as anonymouse funtion
// Arrow function syntex
// arrow function name=()=>{}
// whenever we want to return vaalue in arrow function we enter the type of the date in arrow function sytex 
//name=():string=>{}
let arrowfunc = () => {
    console.log("It is a test Arrow Function");
};
arrowfunc();
let arrowfuncReturn = () => {
    var result = 12 + 12;
    return result;
};
var num1 = arrowfuncReturn();
console.log(num1);
export {};
