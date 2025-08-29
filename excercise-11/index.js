 //factorial of a number
        // let fact=1;
        // let arr=[1,2,3,4,5,6];
        // for(value of arr){
        //     fact=fact*value;
        // }
        // console.log(fact);

        let arr=[1,2,3,4,5,6];

        const fact=(a,b)=>{
            return a*b;
        }
        console.log(arr.reduce(fact));
