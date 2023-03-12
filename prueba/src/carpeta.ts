import {elementoBase} from "./elementoBase";

export

class carpeta extends elementoBase{
    contenido: elementoBase[];
    
    constructor(nombre: string){
        super(nombre);
        this.contenido = new Array<elementoBase>();
    }

    ObtenerTamaño() : number{
        return this.nombre.length;
    }
    
    agregrarElemento(elemento: elementoBase){
        this.contenido.push(elemento);
    }

    eliminarElemento(elemento: elementoBase){
        this.contenido.splice(this.contenido.indexOf(elemento), 1);
    }
    
    getContenido() : elementoBase[]{
        return this.contenido;
    }
}
