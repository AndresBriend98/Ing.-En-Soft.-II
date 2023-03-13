export // Permite que la clase sea importada en otros archivos

// Clase elementoBase que contiene los atributos y métodos comunes a las clases carpeta, video, foto y archivo
abstract class elementoBase{

    nombre: string;
    tamanio: number;

    // Constructor de la clase elementoBase
    constructor(nombre: string){
        this.nombre = nombre;
        this.tamanio = this.obtenerTamanio();
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
    
}