// creating class and defining keys in class object curly bracess and creat a construcntor
class laptop {
    brand: string = "";
    modelyear:number = 0;
    color: string = "";
    constructor(brand: string, modelyear: number, color: string) {
        this.brand = brand;
        this.color = color;
        this.modelyear = modelyear;
    }
}
//creating variables to get out put
var newLaptop = new laptop("Dell", 2003,"Black", )
var newLaptop1 = new laptop("Intel", 2005, "Silver")
var newLaptop3 = new laptop("Apple",2002,"Blue")
// console to pring result
console.log(newLaptop);
console.log(newLaptop1);
console.log(newLaptop3);



