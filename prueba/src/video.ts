import { elementoBase } from "./elementoBase";

export

class video extends elementoBase{

    constructor(nombre: string){
        super(nombre);
    }

    ObtenerTamaño() : number{
        return this.nombre.length;
    }
        
}


