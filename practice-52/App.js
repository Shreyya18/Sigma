const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/contact', (req,res)=>{
    res.send("Contact me :)")
})

app.get('/about', (req,res)=>{
    res.send("I am a web developer")
})

app.get('/blog', (req,res)=>{
    res.send("welcome to my blog")
})


// app.get('/blog/intro-to-js', (req,res)=>{
//     res.send("welcome to intro to js")
// })
// app.get('/blog/intro-to-python', (req,res)=>{
//     res.send("welcome to intro to python")
// })
// app.get('/blog/intro-to-c', (req,res)=>{
//     res.send("welcome to intro to c")
// })
//instead of writing all the routes we can use params
app.get('/blog/:slug', (req,res)=>{
    res.send(`welcome to intro to ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
