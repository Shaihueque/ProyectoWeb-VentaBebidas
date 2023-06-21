const path = require('path'); // unifica windows y mac con el path.resolve

const productsControllers = {
    index: (req, res)=>{
        res.render('products/products')
    },
    detail: (req, res)=>{
        res.render('products/productsDetail')
    }
}

module.exports = productsControllers;