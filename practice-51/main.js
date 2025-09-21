const fs= require('fs/promises');
console.log(fs);

console.log("start")
fs.writeFileSync('hello.txt',"hello world")
console.log("end")

console.log("start")
fs.writeFile('hello2.txt',"hello world",()=>{
    console.log("file is written")
}
)
console.log("end")

fs.readFile('hello.txt', (err, data)=>{
    console.log(data.toString())
})

fs.appendFile('hello.txt', "I am appending this", ()=>{
    console.log("appended")
})
fs.readFile('hello.txt', (err, data)=>{
    console.log(data.toString())
})


//promise based
let a = await fs.appendFile('hello.txt', "I am appending this again")
console.log(a)


