const express = require('express')
const app = express()
const port = 4000

//route
app .get('/', (req, res) => res.send('Hello, world'))
// 127.0.0.1 - localhost
app.listen(port, ()=> console.log(`Example app listening at http://localhost: ${port}`))