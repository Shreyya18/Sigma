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
let x=10;
let y="apple";
let z=true;
let v=null;
let w=undefined;
console.log(x,y,x,v,w);
console.log( typeof x, typeof y, typeof z, typeof v, typeof w);
