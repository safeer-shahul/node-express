const Product = require('../models/product')

exports.getAddProduct = (req,res,next)=>{
    // console.log('in another middleware')
    // res.sendFile(path.join(rootDir,"views","add-product.html"))
    res.render("admin/add-product", {
      path: "/admin/add-product",
      docTitle: "Add Products",
      productCSS:true,
      formsCSS:true,
      activeAddProduct:true
    });
}

exports.postAddProducts = (req,res,next)=>{
    console.log(req.body)
    const title = req.body.title
    const imageUrl = req.body.imageUrl
    const price = req.body.price
    const description = req.body.description
    const product = new Product(title,imageUrl,description,price)
    product.save()
    // products.push({title: req.body.title})
    res.redirect('/')
}

exports.getProducts = (req,res,next) => {
  Product.fetchAll((products)=>{
    res.render('admin/products',{
        prods: products, 
        docTitle: 'Admin Products',
        path: '/admin/products',
    })
})
}