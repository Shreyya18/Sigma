const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    res.sendFile('/templates/index.html', {root:__dirname})
})

//templlate engine
app.set('view engine', 'ejs')
app.get('/placeholder', (req, res) => {
    let arr=["apple", "banana", "grapes", "mango"]
    res.render('index', { siteName: "EXpress.js", content: "Search Now", arr }

    )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
