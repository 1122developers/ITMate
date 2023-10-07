class User {
    private name="Bilal"
    getUser(){
        return this.name
    }
}
class userInfo extends User{
    age=40
    setUserName(){
        return this.name ="tehsin"
    }
}
let obj= new User()
let obj2= new userInfo()
console.log(obj2);

console.log(obj.getUser());
