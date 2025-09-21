const path =require('path');
let myPath= "D:\\Sigma Web Dev\\hello.txt"

console.log(path)
console.log(path.extname(myPath))
console.log(path.basename(myPath))
console.log(path.dirname(myPath))

console.log(path.parse(myPath))

console.log(path.join(__dirname, "hello.txt"))