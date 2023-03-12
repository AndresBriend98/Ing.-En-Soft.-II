import { elementoBase } from "./elementoBase";

export

class archivo extends elementoBase{
    
    constructor(nombre: string){
        super(nombre);
    }
    
    ObtenerTamaño() : number{
        return this.nombre.length;
    }
        
}