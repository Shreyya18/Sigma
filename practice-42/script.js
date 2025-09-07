let button=document.getElementById("btn");
button.addEventListener("click", ()=>{
    let para=document.getElementsByTagName("p")
    para[0].innerText="Hey.. You clicked Me :)";
})