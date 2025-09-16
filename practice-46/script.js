let a= prompt("enter first number")
let b= prompt("enter second number")

let sum= parseInt(a)+parseInt(b)
console.log(sum)

if(isNaN(a) || isNaN(b))
    throw TypeError ("this is not allowed")


