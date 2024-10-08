const express = require('express')
const path = require('path')

const adminController = require('../controllers/admin')

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',adminController.getAddProduct)
router.get('/products',adminController.getProducts)

// /admin/add-product => POST
router.post('/add-product',adminController.postAddProducts)

module.exports = router;


