// Slice method return selected elements in an array as new array slice method does not change the original array it returns only selected elements

let arrNew:string[] = ["Sohail", "Umar", "Shahaan", "Zohaib"]
console.log(arrNew);
let newarry2:string[]=arrNew.slice(1,4)
console.log(newarry2);

// The splice method add and/or remove elements of array
// The splice method overwrite the original array
// return deleted elements in array
let userName2:string[] = ["Ali", "Hassan", "Ahmad", "Hamza"]
let deletedArray:string[] = userName2.splice(1,2,"Teepu", "Ghalib")
console.log(userName2);




