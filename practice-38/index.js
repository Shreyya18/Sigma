let arr=[1,3,4,5,7];
console.log(arr);
console.log(arr.length);
console.log(arr.join(" and "));
arr.pop();
console.log(arr);
arr.push(10)
console.log(arr);
arr.shift()
console.log(arr);
arr.unshift(0)
console.log(arr);

delete arr[2];
console.log(arr);
console.log(arr[2]);

let arr1=[1,3,5,7];
let arr2=[2,4,6,8];
// let arr3=arr1.concat(arr2);
// console.log(arr3);
// arr1=arr1.concat(arr2);
// console.log(arr1);

console.log(arr1.concat(arr2));

let arr3=[1,3,4,5,7];
arr3.splice(1,2);
console.log(arr3);
let arr4=[1,2,3,4,5];
arr4.splice(1,2,"no-value","no-value");
console.log(arr4);

let arr5=[1,2,3,4,5,6,7];
let newArr5=arr5.slice(2,4);
console.log(newArr5);
let arr6=[1,2,3,4,5,6,7];
arr6.reverse();
console.log(arr6);

let arr7=[3,6,9,12,15,18];

let newArr7=arr7.map((value)=>{
    return value*2;

})
console.log(newArr7);

let arr8=[2,4,6,8,10,12];

const greaterThanfive=(value)=>{
    if(value>5)
            return true;
    return false;
}
let newArr8= arr8.filter(greaterThanfive);
console.log(newArr8);

let arr9=[1,2,3,4,5,6];
 const sum=(a,b)=>{
    return a+b;
 }
console.log(arr9.reduce(sum));