// Importo la clase elementoBase
import { elementoBase } from "./elementoBase";

export // Permite que la clase sea importada en otros archivos

// Clase foto que hereda de elementoBase
class foto extends elementoBase{
   
    // Constructor de la clase foto
    constructor(nombre: string){
        super(nombre);
    
    }

}