// Map function
// Map function returns a new array
// it doest not execute on empty array
// Map function does not change original array
// Map take three perameters
// syntex
// .map(()=>{})
// is array mai hum sirf element ko return karna seekhy ge
// let arr = [1,2,3];
// let newarray= arr.map ((element)=>{
//     return element
// })
// console.log("Original Array", arr);
// console.log("New Array", newarray);
// is array mai hum function ki madad sy array k elements ma koi value add krna seekhy ge
// let arr = [1,2,3];
// let newarray= arr.map ((element)=>{
//     return element + 10
// })
// console.log("Original Array", arr);
// console.log("New Array", newarray);
// // is newarray may hum element k satha index k sath perform kry ge 
// let arr = [1,2,3];
// let newarray= arr.map ((element, index)=>{
//     console.log("Index", index);
//     return element + 10
// })
// ab hum array k 3rd element k sath perform kre ge
// let arr = [1,2,3];
// let newarray= arr.map ((element, index, refarray)=>{
//     console.log("RefArray", refarray);
//     console.log("Index", index);
//     return element + 10
// })
// Map function on Array of Object
let arr = [1, 2, 3];
let arrayOfObject = arr.map((element, index, refarray) => {
    return {
        elementval: element,
        elementindex: index,
        refarray: refarray
    };
});
console.log(arrayOfObject);
//To get Duplicate Array
let duplicatearr = ;
export {};
