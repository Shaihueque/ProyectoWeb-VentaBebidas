const express = require('express'); 
const path = require('path');
const app = express();

// PUERTO A UTILIZAR 
const PORT = 3030;

// RUTAS PATH 
const publicPath = path.join(__dirname ,'/public');

/**********  ESCUCHANDO EL PUERTO   *********/
app.listen(PORT , ()=>{
    console.log('Servidor corriendo en el puerto ' + PORT)
});

/************ REQUIRE DE RUTAS  **************/ 
const mainRoutes =  require('./routes/mainRoutes.js');  
const productsRoutes = require('./routes/productsRoutes.js');
const carritoRoutes =  require('./routes/carritoRoutes.js'); 
const usersRoutes =  require('./routes/usersRoutes.js'); 

/*********  SETEANDO LAS VISTAS PARA TRABAJAR CON EJS ***********/
app.set('view engine', 'ejs'); 
app.set("views", path.join(__dirname, "views"));

/********** CONFIGURANDO LA CARPETA PUBLIC  ***********/
app.use(express.static(publicPath)); 

/********** USE DE RUTAS PRINCIPALES *************/

app.use('/' , mainRoutes );
app.use('/products' , productsRoutes)
app.use('/carrito' , carritoRoutes);
app.use('/users' , usersRoutes);