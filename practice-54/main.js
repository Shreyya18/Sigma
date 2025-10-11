const express= require('express')
const fs=require('fs')
const app=express()
const port=3000
// Middleware in Express.js are functions that process requests before they reach the final route handler — like checkpoints that can modify, validate, or terminate the request

const myLogger=(req,res, next)=>{
    console.log("logged")
    fs.appendFileSync('log.txt', `New request made at ${new Date()}\n`)
    // res.send(`Request logged at ${new Date()}`)
    next()
}

app.use(myLogger)


app.get('/', (req,res)=>{
    res.send("Hello World...")
})

app.listen((port),()=>{
    console.log(`Example app listening on port ${port}`)
})