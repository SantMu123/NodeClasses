const humano = require("./module")
const saludar = require("./module")

//console.log(saludar())

//cuando se utiliza los modules commonjs todo se convierte en sincrono
//lo asincrono son promesas

async function main(){
    humano.instance = {nombre: "santiago"}
    console.log(humano.instance.nombre)
    humano.instance.destructor()
    humano.Setinstance = {nombre: "Paula"}
    //se vuelve a instanciar
}

main()