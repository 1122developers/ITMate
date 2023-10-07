// // Find Array Method

// let userName:string [] = ["Zeeshan","Adnan","Asif","Sabri"]
// let result:string = userName.find((i)=>{
//     return i== "Asif"
// })
// console.log(result);

// Fine Array of Object

let userName1 = [{Name:"Adnan",age:10,},{Name:"Zeeshan Shafi",age:50}]
let response= userName1.find((i)=>{
    return i.Name== "Adnan"
})
console.log(response);




export{}