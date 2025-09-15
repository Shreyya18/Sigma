async function terminal(text, dot) {
    let randNo = Math.floor(Math.random() * 7000)
    console.log(randNo)
    return new Promise((resolve, reject) => {
         const interval=setInterval(() => {
        let span= document.querySelectorAll("span")
        for(let i=0;i<5;i++)
        span[i].classList.toggle("blink")

    }, 2000);
        setTimeout(() => {
            document.querySelector("div").innerHTML += `<p>${text}
    <span>
    ${dot}
    </span>
    </p>`
    // clearInterval(interval)
            resolve()
        }, randNo);
       
    })
    
}
async function main() {
    await terminal("Initializing hacking", "...")
    await terminal("Reading your files", "...")
    await terminal("Password files detected", "...")
    await terminal("Sending all password and personal files to server", "...")
    await terminal("cleaning up", "...")
}
main()
