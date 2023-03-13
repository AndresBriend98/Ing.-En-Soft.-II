// Importo la clase elementoBase
import { elementoBase } from "./elementoBase";

export // Permite que la clase sea importada en otros archivos

// Clase archivo que hereda de elementoBase
class archivo extends elementoBase{
    
    // Constructor de la clase archivo
    constructor(nombre: string){
        super(nombre);
        
    }
  
}