import { v4 as uuidv4 } from 'uuid';

export // Permite que la clase sea importada en otros archivos

// Clase elementoBase que contiene los atributos y métodos comunes a las clases carpeta, video, foto y archivo
abstract class elementoBase{

    nombre: string;
    tamanio: number;
    readonly id: string;

    // Constructor de la clase elementoBase
    constructor(nombre: string){
        this.nombre = nombre;
        this.tamanio = this.obtenerTamanio();
        this.id = uuidv4();
    }

    // Métodos get y set de los atributos nombre y tamaño
    getNombre() : string{
        return this.nombre;
    }
    setNombre(nombre: string){
        this.nombre = nombre;
    }

    getTamanio() : number{
        return this.tamanio;
    }

    setTamanio(tamanio: number){
        this.tamanio = tamanio;
    }

    // Método abstracto que devuelve el tamaño del elemento
    obtenerTamanio() : number{
        return this.nombre.length;
    }

    // Método abstracto que devuelve el id del elemento
    getId() : string{
        return this.id;
    }
}