let button=document.getElementById("btn");
button.addEventListener("click" ,()=>{
    // let para=document.getElementsByTagName("p")
    // para[0].innerText="Hey.. You clicked Me :)";
    document.querySelector("p").innerText="Hey.. You clicked Me :)"
})
window.addEventListener("contextmenu" ,()=>{
    // let para=document.getElementsByTagName("p")
    // para[0].innerText="Hey.. You clicked Me :)";
    alert("do not right click")
})
window.addEventListener("keyup" ,()=>{
    // let para=document.getElementsByTagName("p")
    // para[0].innerText="Hey.. You clicked Me :)";
    alert("keyup");
})
window.addEventListener("keydown" ,()=>{
    // let para=document.getElementsByTagName("p")
    // para[0].innerText="Hey.. You clicked Me :)";
    alert("keydown");
})
window.addEventListener("keypress" ,()=>{
    // let para=document.getElementsByTagName("p")
    // para[0].innerText="Hey.. You clicked Me :)";
    alert("keypress");
})


document.querySelector("button").onclick=function(){
    document.querySelector(".main").classList.toggle("dark");
    if( document.querySelector(".main").classList.contains("dark"))
            document.querySelector("button").innerText="LIGHT MODE";
    else
            document.querySelector("button").innerText="DARK MODE";



}

function getRandom(){
    let randColor= "#"+Math.floor(Math.random()*167772155).toString(16);
    return randColor;
}
setInterval(() => {
    document.querySelector("nav").style.backgroundColor= getRandom();
}, 100);

setTimeout(() => {
    document.querySelector("body").style.backgroundColor="blue"
}, 4000);


