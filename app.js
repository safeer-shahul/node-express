const http = require('http')
const express = require('express')
const app = express()


app.use('/users',(req,res,next)=>{
    console.log('middleware2')
    res.send('<h1>User</h1>')
})

app.use('/',(req,res,next)=>{
    console.log('middleware2')
    res.send('<h1>Hello from Express</h1>')
})
app.listen(3000, () => console.log('Server running...'));