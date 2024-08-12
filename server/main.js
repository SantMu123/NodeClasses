const saludar = require("./module")

//console.log(saludar())

//cuando se utiliza los modules commonjs todo se convierte en sincrono
//lo asincrono son promesas

saludar().then(res=>{
    console.log("Hola")
})