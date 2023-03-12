export

abstract class elementoBase{

    nombre: string;
    tamaño: number;

    constructor(nombre: string){
        this.nombre = nombre;
        this.tamaño = this.ObtenerTamaño();
    }

    getNombre() : string{
        return this.nombre;
    }
    setNombre(nombre: string){
        this.nombre = nombre;
    }

    getTamaño() : number{
        return this.tamaño;
    }
    setTamaño(tamaño: number){
        this.tamaño = tamaño;
    }

    ObtenerTamaño() : number{
        return this.nombre.length;
    }
}