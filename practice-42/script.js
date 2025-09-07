let button=document.getElementById("btn");
button.addEventListener("click", ()=>{
    let para=document.getElementsByTagName("p")
    para[0].innerText="Hey.. You clicked Me :)";
})

document.querySelector("button").onclick=function(){
    document.querySelector(".main").classList.toggle("dark");
    if( document.querySelector(".main").classList.contains("dark"))
            document.querySelector("button").innerText="LIGHT MODE";
    else
            document.querySelector("button").innerText="DARK MODE";



}

