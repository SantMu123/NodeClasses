module.exports = class humano {
    static instance;
    nombre;
    constructor({nombre}){
        this.nombre = nombre
    }
    static set Setinstance(arg){
        if(typeof humano.instance === "object"){
            return humano.instance
        }
        humano.instance = new humano(arg)
    }
    saludar(){
        return "Hola Mundo"
    }
    destructor(){
        humano.instance = undefined;
    }
}