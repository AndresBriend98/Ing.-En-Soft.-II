// Importo la clase elementoBase
import { elementoBase } from "./elementoBase";

export // Permite que la clase sea importada en otros archivos

// Clase video que hereda de elementoBase
class video extends elementoBase{

    // Constructor de la clase video
    constructor(nombre: string){
        super(nombre);
    }

    // Método que devuelve el tamaño del video
    obtenerTamanio() : number{
        return this.nombre.length;
    }

}


