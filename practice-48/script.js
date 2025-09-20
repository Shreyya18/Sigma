//problem-2
let arr=[1,2,3,3,4,6,7,8,8,9]
console.log(arr)
function doubleElement(arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==arr[i+1]){
            arr[i]=arr[i]*2;
            i++;
        }
        else{
            arr[i]=arr[i]*2;
        }
    }
    console.log(arr)
}

doubleElement(arr)

//problem-3
let s="code"
console.log(s)
function reverseAppend(s){
    let rev=s.split('').reverse().join('')
    console.log(rev)
    s+=rev
    console.log(s)
    return s
}

console.log(reverseAppend(s))


//problem-4  password validator
function isUpper(pass){
    return /[A-Z]/.test(pass)
}
function isLower(pass){
    return /[a-z]/.test(pass)
}
function isDigit(pass){
    return /\d/.test(pass)
}
function passwordValidator(pass){
    let valid=true
    if(pass.length<8){
        console.log("Passowrd must be atleast 8 characters long...")
        valid=false
    }
    if(!isUpper(pass)){
        console.log("Password must have atleast one Uppercase :)")
        valid=false
    }
    if(!isLower(pass)){
        console.log("Password must have atleast one LowerCase :)")
        valid=false
    }
    if(!isDigit(pass)){
        console.log("Password must have atleast one digit :)")
        valid=false
    }
    if(valid){
        console.log("Password set sucessfully!!!")
    }

}

passwordValidator("Password1")
passwordValidator("password1")


//problem-5
let a=[3,-1,6,3,2,-4,6,7,2,1]
function sumPositive(a){
    let sum=0;
    for (let i = 0; i < a.length; i++) {
        if(a[i]<0){
            return sum;
        }
        else{
            sum=sum+a[i];
        }
    }
    return sum;
}

console.log(sumPositive(a))