const path = require('path'); // unifica windows y mac con el path.resolve

const mainControllers = {
    index: (req, res)=>{
        res.render('home')
    }
}

module.exports = mainControllers;