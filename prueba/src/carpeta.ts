// Importo la clase elementoBase
import {elementoBase} from "./elementoBase";

export // Permite que la clase sea importada en otros archivos

// Clase carpeta que hereda de elementoBase
class carpeta extends elementoBase{

    // Atributo que contiene el contenido de la carpeta
    contenido: elementoBase[];
    
    // Constructor de la clase carpeta
    constructor(nombre: string){
        super(nombre);
        this.contenido = new Array<elementoBase>();
    }
    
    // Método que agrega un elemento a la carpeta
    agregrarElemento(elemento: elementoBase){
        this.contenido.push(elemento);
    }

    // Método que elimina un elemento de la carpeta
    eliminarElemento(elemento: elementoBase){
        this.contenido.splice(this.contenido.indexOf(elemento), 1);
    }
    
    // Método que devuelve el contenido de la carpeta
    getContenido() : elementoBase[]{
        return this.contenido;
    }
}
