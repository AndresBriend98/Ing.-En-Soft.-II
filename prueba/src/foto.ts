import { elementoBase } from "./elementoBase";

export

class foto extends elementoBase{
    
    constructor(nombre: string){
        super(nombre);
    }
    
    ObtenerTamaño() : number{
        return this.nombre.length;
    }
        

}