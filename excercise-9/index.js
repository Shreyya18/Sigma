// // faulty calculator

// function sum(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

// function div(a,b){
//     return a/b;
// }   
// function exponent(a,b){
//     return a**b;
// }

// let a=8;
// let b=4;
// if(Math.random()>0.5){
//     console.log("sum is"+sub(a,b));
//     console.log("sub is"+sum(a,b));
//     console.log("div is"+exponent(a,b));
//     console.log("exponent is"+div(a,b));
// }
// else{
//     console.log("sum is"+sum(a,b));
//     console.log("sub is"+sub(a,b));
//     console.log("div is"+div(a,b));
//     console.log("exponent is"+exponent(a,b));
// }


let a=prompt("Enter first number");
let b=prompt("Enter second number");
let op=prompt("Enter operation to be performed");

if(Math.random()>0.5){
    if(op=='+'){
        // console.log("sum is"+(a-b));
        alert("result is"+(a-b));
    }
    else if(op=='-'){
        // console.log("sub is"+(a+b));
        alert("result is"+(a+b));
    }
    else if(op=='/'){
        // console.log("div is"+(a**b));
        alert("result is"+(a**b));
    }
    else if(op=='*'){
        // console.log("exponent is"+(a/b));
        alert("result is"+(a/b));
    }
    else{
        console.log("Invalid operation");
        alert("Invalid operation");
    }
}
else{ 
    if(op=='+'){
        // console.log("sum is"+(parseInt(a)+parseInt(b)));
        alert("result is"+(parseInt(a)+parseInt(b)));
    }
    else if(op=='-'){
        // console.log("sub is"+(a-b));
        alert("result is"+(a-b));

    }
    else if(op=='/'){
        // console.log("div is"+(a/b));
        alert("result is"+(a/b));
    }
    else if(op=='*'){
        // console.log("exponent is"+(a*b));
        alert("result is"+(a*b));
    }
    else{
        // console.log("Invalid operation");
        alert("Invalid operation");
    }
}