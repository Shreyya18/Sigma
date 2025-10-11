const express=require('express')
const router=express.Router()

router.get('/', (req,res)=>{
    res.send("Welcome to my blog")
})

router.get('/blogPost/:slug', (req,res)=>{
    res.send( `This is the about page of my blog ${req.params.slug}`)
})

module.exports= router