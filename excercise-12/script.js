// let color=["red","blue","green","yellow","pink","black"];

// let arr=document.querySelectorAll(".box") 
// for(let i=0;i<5;i++){
//     arr[i].style.backgroundColor=color[Math.floor(Math.random()*6)];
// }

var boxes=document.querySelectorAll(".box");

for(let i=0;i<boxes.length;i++){
    box=boxes[i];

    var color="#"+Math.floor(Math.random()*16777215).toString(16);

    var backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);

    box.style.color=color;
    box.style.backgroundColor=backgroundColor;
}