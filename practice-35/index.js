console.log("loops in js");
for(let i=0;i<=10;i++){
    console.log(i);
}

let obj={
    name:"john",
    age:30,
    city:"New York"
}
for(let key in obj){
    console.log(key, obj[key]);
}

for (const element of obj.name) {
    console.log(element);
    
}

let i=0;
while(i<5){
    console.log(i);
    i++;
}
 console.log("do while loop");
let j=10;
do{
    console.log(j);
    j++;
}
while(j<5);