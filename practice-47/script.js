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

// destructing using spread operator
function destruct(){
    let [a,b]=[1,2]
    console.log(a)
    console.log(b)

    let [c,d, ...spread]=[1,4,2,5,8]
    console.log(c)
    console.log(d)
    console.log(spread)
    console.log(sum(c,d))
}

destruct()