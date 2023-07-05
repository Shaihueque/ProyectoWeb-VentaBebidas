const path = require('path'); // unifica windows y mac con el path.resolve

const cartControllers = {
    index: (req, res)=>{
        res.render('users/cart')
    }
}

module.exports = cartControllers;