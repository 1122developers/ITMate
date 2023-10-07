// 
class School {
    name;
    students = [];
    addstudent(stdobj) {
        this.students.push(stdobj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    Name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.Name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
let school1 = new School("Alpha");
let school2 = new School("Nooby");
let s1 = new Student("Bilal", 40, school1.name);
let s2 = new Student("Tehsin", 65, school2.name);
let s3 = new Student("Ahmad", 70, school2.name);
console.log(s1);
console.log(school1);
console.log(school2);
export {};
