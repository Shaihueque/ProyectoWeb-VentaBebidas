const express = require('express'); 

// PUERTO A UTILIZAR 
const PORT = 3030;

/**********  ESCUCHANDO EL PUERTO   *********/
app.listen(PORT , ()=>{
    console.log('Servidor corriendo en el puerto ' + PORT)
});