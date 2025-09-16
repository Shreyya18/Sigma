let a= prompt("enter first number")
let b= prompt("enter second number")

let sum= parseInt(a)+parseInt(b)
console.log(sum)
// throw example
if(isNaN(a) || isNaN(b))
    throw TypeError ("this is not allowed")

// try and catch example
try {
    console.log(sum*x)
    
} catch (error) {
    console.log("error occured for x" )
}

//finally example
function main(){
    try{
        console.log(sum*y)
        return true
    }
    catch(error){
        console.log("error occured again for y")
        return false
    }
    finally{
        console.log('files are being closed...')
    }
}

let c= main()
console.log(c)