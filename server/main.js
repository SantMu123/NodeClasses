const humano = require("./module")
const saludar = require("./module")

//console.log(saludar())

//cuando se utiliza los modules commonjs todo se convierte en sincrono
//lo asincrono son promesas

humano.getInstance;
humano.instance.nombre = "Santiago"
console.log(humano.instance.getNombre);
humano.instance.nombre = "Paula"
console.log(humano.instance.getNombre)