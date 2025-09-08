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

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(400);
        }, 4000);
    });
}

async function main() {
    console.log("async example");
    console.log("load data")

    let data= await getData();

    console.log(data)
    console.log("process data")
}

main()


fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
