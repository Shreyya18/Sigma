console.log("this is a promise");
let prom1=new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a<0.5)
        reject("NO random number was supporting you 1 ")
    else{
        setTimeout(()=>{
            resolve("harry")
            console.log("Yes Iam done 1")
        }, 1000);
    }
})

let prom2=new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a<0.5)
        reject("NO random number was supporting you 2 ")
    else{
        setTimeout(()=>{
            resolve("harry 2")
            console.log("Yes Iam done 2")
        }, 1000);
    }
})

let p=Promise.all([prom1, prom2])
p.then((a)=>{
    console.log(a)
}).catch((e)=>{
    console.log(e)
})

