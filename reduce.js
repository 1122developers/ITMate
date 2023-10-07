// reduce 
// array method
// syntax
//.reduce(()=>,val)5,10,15,20
var valueOfArray = [10, 20, 30, 40, 50];
var reduce = valueOfArray.reduce((init, curentelement) => {
    return init + curentelement;
}, 100);
console.log(reduce);
export {};
