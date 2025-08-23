console.log("hello world");

let age=19;
if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

let a=5;
let b="5";
if(a==b){
    console.log("value equal(5==5)");
}
if(a===b){
    console.log("value and type equal(5===5)");
}
//use of logical operators
let age_age=25;
if(age_age<20 && age_age>10){
    console.log("age is between 10 and 20");
}
else{
    console.log("age is not between 10 and 20");
}
//use of switch case
let day="monday";
switch(day){
    case "monday":
        console.log("Today is Monday");
        break;
    case "tuesday":
        console.log("Today is Tuesday");                    
        break;
    default:               
        console.log("Today is not Monday or Tuesday");
        break;          

}
//js code to find whether a number is divisible by 2 and 3
let num=8;
if(num%2==0 && num%3==0){
    console.log("number is divisible by 2 and 3");  
}
else{
    console.log("number is not divisible by 2 and 3");
}

//js code to find whetehr a number is divisible by either  2 or 3

let num1=7;
if(num1%2==0|| num1%3==0){
    console.log("number is divisible by either 2 or 3");
}
else{
    console.log("number is not divisible by either 2 or 3");
}


//ternary operator
let age1=17;
console.log((age1>18)? "You can drive":"You cant drive");