const path = require('path'); // unifica windows y mac con el path.resolve

const carritoControllers = {
    index: (req, res)=>{
        res.render('users/carrito')
    }
}

module.exports = carritoControllers;