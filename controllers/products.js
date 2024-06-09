const Product = require('../models/product')

exports.getAddProduct = (req,res,next)=>{
    // console.log('in another middleware')
    // res.sendFile(path.join(rootDir,"views","add-product.html"))
    res.render("add-product", {
      path: "/admin/add-product",
      docTitle: "Add Products",
      productCSS:true,
      formsCSS:true,
      activeAddProduct:true
    });
}

exports.postAddProducts = (req,res,next)=>{
    console.log(req.body)
    const product = new Product(req.body.title)
    product.save()
    // products.push({title: req.body.title})
    res.redirect('/')
}

exports.getProducts = (req,res,next)=>{
    Product.fetchAll((products)=>{
        res.render('shop',{
            prods: products, 
            docTitle: 'My Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop:true,
            productCSS:true,
        })
    })
    
}