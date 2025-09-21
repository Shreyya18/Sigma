// function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(400);
//         }, 4000);
//     })
// }

// console.log("loading modules...")
// console.log("Do something else...")
// let data=getData();
// console.log("process data")
// console.log("task2")
//  data.then((v)=>{
//     console.log(data)
//     console.log(v)
//  })

// using async

// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(400);
//         }, 4000);
//     });
// }

// async function getData() {
//     let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(x)
//     return 444;
          
    
// }


console.log("start")
async function getData() {
    let x =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data= await x.text()
    console.log(data)
    return "400 OK"
    
}



async function main() {
    console.log("async example");
    console.log("load data")

    let data= await getData();

    console.log(data)
    console.log("process data")
}

main()

console.log("end")


