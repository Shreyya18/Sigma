let color=["red","blue","green","yellow","pink","black"];

let arr=document.querySelectorAll(".box") 
for(let i=0;i<5;i++){
    arr[i].style.backgroundColor=color[Math.floor(Math.random()*8)];
}