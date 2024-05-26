const express = require('express')
const path = require('path')

const router = express.Router();

const rootDir = require('../util/path');
const { title } = require('process');

const products = []

router.get('/add-product',(req,res,next)=>{
    // console.log('in another middleware')
    res.sendFile(path.join(rootDir,"views","add-product.html"))
})

router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    products.push({title: req.body.title})
    res.redirect('/')
})

// module.exports = router;

exports.routes = router;
exports.products = products;
