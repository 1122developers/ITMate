class laptop {
    brand = "";
    modelyear = 0;
    color = "";
    constructor(brand, modelyear, color) {
        this.brand = brand;
        this.color = color;
        this.modelyear = modelyear;
    }
}
var newLaptop = new laptop("Dell", 2003, "Black");
var newLaptop1 = new laptop("Intel", 2005, "Silver");
console.log(newLaptop);
console.log(newLaptop1);
export {};
