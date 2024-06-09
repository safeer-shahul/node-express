const fs = require("fs");
const path = require("path");

const p = path.join(
    path.dirname(require.main.filename),
    "data",
    "products.json"
  );

const getProductsFromFile = cb =>{
    fs.readFile(p,(err,data)=>{
        if(err){
            // return []
            cb([])
        } else {
            cb(JSON.parse(data));
        }
    })
}

module.exports = class Product {
  constructor(titleP) {
    this.title = titleP;
  }

  save() {
    // products.push(this)
    getProductsFromFile(products => {
        products.push(this)
        fs.writeFile(p,JSON.stringify(products),(err)=>{
            console.log(err,"error")
        })
    })
  }

  static fetchAll(cb) {
    getProductsFromFile(cb)
    // return products;
  }
};
