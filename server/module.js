module.exports = class humano {
    static instance;
    nombre;
    
    static get getInstance(){
        if(typeof humano.instance === "object"){
            return humano.instance
        }
        humano.instance = new humano()
        return this
    }
    set setNombre(nombre){
        this.nombre = nombre
    }
    get getNombre(){
        return this.nombre;
    }
    destructor(){
        humano.instance = undefined;
    }
}