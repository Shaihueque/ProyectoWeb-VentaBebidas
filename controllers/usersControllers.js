const path = require('path'); // unifica windows y mac con el path.resolve

const usersControllers = {
    index: (req, res)=>{
        res.render('users/login')
    },
    carrito: (req, res)=>{
        res.render('users/carrito')
    }
}

module.exports = usersControllers;