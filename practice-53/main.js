const express=require('express')
const blog=require('./routes/blog')
const app=express()
const port=3000

app.use(express.static('public'))
app.use('/blog', blog)

app.get('/' , (req,res)=>{
    res.send("Hello World... Welcome to my first express app")
}
)

app.post('/', (req,res)=>{
    res.send("You have sent a post request")
}
)

app.get('/index', (req,res)=>{
    res.sendFile('templates/index.html', {root:__dirname})
    // res.send(__dirname)
})

app.get('/about', (req,res)=>{
    // res.download('templates/about.html', {root:__dirname})
    res.redirect('https://www.google.com')
})

app.listen((port), ()=>{
    console.log(`Example app listening on port ${port}`)
})