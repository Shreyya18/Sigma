let a="john"
console.log("hello", a);
console.log("hello"+ a);
console.log(`hello ${a}`);
console.log(`john's age is 20`);
console.log("john\'s age is 20");

let b="alice";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1,3));
console.log(b.replace("al","s"));
console.log(b.concat(a));

//whitespace

let c="  nick   bob ";
console.log(c);
console.log(c.trim());