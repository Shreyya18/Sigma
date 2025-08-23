console.log("hello world");
var a=5;
let d=20;
console.log("var variable"+a);
console.log("let variable"+d);
var b=2;
var c="string";
console.log(a+b);
console.log(typeof a, typeof b, typeof c);
{
    var a=10;
    console.log("block "+ a);
    let d=30;
    console.log("block"+ d);
}
console.log("outside block"+a); 
console.log("outside block"+d);