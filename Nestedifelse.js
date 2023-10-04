// nested if else
var userName = "Zeeshan";
var pasword = "1122";
var OTP = "1234";
if (userName == "Zeeshan" && pasword == "122") {
    console.log("Please Provide OTP");
    if (OTP == "124") {
        console.log("Welcome To Login HBL");
    }
    else {
        console.log("Provided OTP is invalid");
    }
}
else {
    console.log("Your User Name and Paswored is incorrect");
}
export {};
