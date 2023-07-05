const path = require('path'); // unifica windows y mac con el path.resolve

const usersControllers = {
    login: (req, res) => {
        res.render(path.join(__dirname, '../views/users/login'));
    },
    register: (req, res) => {
        res.render(path.join(__dirname, '../views/users/register'))
    }
}

module.exports = usersControllers;