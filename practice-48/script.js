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