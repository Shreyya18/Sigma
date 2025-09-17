async function sleep() {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(50)
        }, 1000);
     })
    
}
//IIF=> Immediate Invoke function
(async function main() {

    let a= await  sleep()
    console.log(a)
})()


