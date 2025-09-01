let box=document.getElementsByClassName("box");
box[3].style.backgroundColor="red";
document.getElementById("bluebox").style.backgroundColor="blue";
document.querySelector(".box").style.color="red";
// document.querySelectorAll(".box").style.color="blue"; // This will not work because querySelectorAll returns a NodeList, not a single element.
document.querySelectorAll(".box").forEach(e => {e.style.color="blue" })
document.querySelector(".container").contains(document.querySelector(".box"))
