document.querySelector(".box");
document.querySelector(".box").innerText="hyy";
document.querySelector(".box").innerHTML="hyy";
document.getElementsByClassName("box")[2].innerText="hyy";

// document.getElementsByClassName("container");

let div=document.createElement("div");
div.innerHTML="i have been created <b>by shreya</b>";
div.setAttribute("class", "created");
document.querySelector(".container").append(div);

let h1=document.createElement("h1");
h1.innerHTML="good evening";
h1.setAttribute("id","heading")
document.querySelector(".container").prepend(h1);

document.querySelector(".box").remove();

document.querySelector("button").onclick=function(){
document.querySelector(".main").classList.toggle("darkMode");
}
