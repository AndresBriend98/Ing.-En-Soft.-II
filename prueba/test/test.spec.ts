// Importo las clases
import { archivo } from "../src/archivo";
import { foto } from "../src/foto";
import { video } from "../src/video";
import { carpeta } from "../src/carpeta";

/*---------------------------------------------------------------------*/

test('Debe crear una carpeta', () => {
    const expeted = new carpeta('carpeta1');
    const result = new carpeta('carpeta1');

    expect(result.getNombre()).toEqual(expeted.getNombre());
});

/*---------------------------------------------------------------------*/
// Insertar foto, archivo, carpeta o video a una carpeta
test ('Debe insertar foto en una carpeta', () => {
    const foto1 = new foto('foto1');
    const carpeta1 = new carpeta('carpeta1');

    carpeta1.agregrarElemento(foto1);

    expect(carpeta1.getContenido()).toContain(foto1);

});


test ('Debe insertar video en una carpeta', () => {
    const video1 = new video('video1');
    const carpeta1 = new carpeta('carpeta1');

    carpeta1.agregrarElemento(video1);

    expect(carpeta1.getContenido()).toContain(video1);

});


test ('Debe insertar archivo en una carpeta', () => {
    const archivo1 = new archivo('archivo1');
    const carpeta1 = new carpeta('carpeta1');

    carpeta1.agregrarElemento(archivo1);

    expect(carpeta1.getContenido()).toContain(archivo1);

});


test ('Debe insertar una carpeta dentro de una carpeta', () => {
    const carpeta1 = new carpeta('carpeta1');
    const carpeta2 = new carpeta('carpeta2');

    carpeta1.agregrarElemento(carpeta2);

    expect(carpeta1.getContenido()).toContain(carpeta2);

});

/*---------------------------------------------------------------------*/
// Cambiar nombre de una carpeta
test ('Debe cambiar el nombre de una carpeta', () => {
    const carpeta1 = new carpeta('carpeta1');
    carpeta1.setNombre('carpeta2');

    expect(carpeta1.getNombre()).toEqual('carpeta2');
});

/*---------------------------------------------------------------------*/
// Eliminar foto, archivo, carpeta o video de una carpeta
test ('Debe eliminar una foto de una carpeta', () => {
    const foto1 = new foto('foto1');
    const carpeta1 = new carpeta('carpeta1');

    carpeta1.agregrarElemento(foto1);
    carpeta1.eliminarElemento(foto1);

    expect(carpeta1.getContenido()).not.toContain(foto1);

});


test ('Debe eliminar un video de una carpeta', () => {
    const video1 = new video('video1');
    const carpeta1 = new carpeta('carpeta1');

    carpeta1.agregrarElemento(video1);
    carpeta1.eliminarElemento(video1);

    expect(carpeta1.getContenido()).not.toContain(video1);

});


test ('Debe eliminar un archivo de una carpeta', () => {
    const archivo1 = new archivo('archivo1');
    const carpeta1 = new carpeta('carpeta1');

    carpeta1.agregrarElemento(archivo1);
    carpeta1.eliminarElemento(archivo1);

    expect(carpeta1.getContenido()).not.toContain(archivo1);

});


test ('Debe eliminar una carpeta de una carpeta', () => {
    const carpeta1 = new carpeta('carpeta1');
    const carpeta2 = new carpeta('carpeta2');

    carpeta1.agregrarElemento(carpeta2);
    carpeta1.eliminarElemento(carpeta2);

    expect(carpeta1.getContenido()).not.toContain(carpeta2);

});

/*---------------------------------------------------------------------*/
// Obtener la cantidad de elementos que hay dentro de una carpeta
test ('Debe obtener la cantidad de elementos de una carpeta', () => {
    const carpeta1 = new carpeta('carpeta1');
    const carpeta2 = new carpeta('carpeta2');
    const archivo1 = new archivo('archivo1');
    const archivo2 = new archivo('archivo2');
    const foto1 = new foto('foto1');
    const foto2 = new foto('foto2');
    const video1 = new video('video1');
    const video2 = new video('video2');

    carpeta1.agregrarElemento(carpeta2);
    carpeta1.agregrarElemento(archivo1);
    carpeta1.agregrarElemento(archivo2);
    carpeta1.agregrarElemento(foto1);
    carpeta1.agregrarElemento(foto2);
    carpeta1.agregrarElemento(video1);
    carpeta1.agregrarElemento(video2);

    expect(carpeta1.getContenido().length).toBe(7);
});

/*---------------------------------------------------------------------*/
// Verificar que elementos hay dentro de una carpeta
test ('Debe verificar que elementos hay dentro de una carpeta', () => {
    const carpeta1 = new carpeta('carpeta1');
    const archivo1 = new archivo('archivo1');
    const foto1 = new foto('foto1');
    const video1 = new video('video1');
   
    carpeta1.agregrarElemento(archivo1);
    carpeta1.agregrarElemento(foto1);
    carpeta1.agregrarElemento(video1);

    expect(carpeta1.getContenido()).toContain(archivo1);
    expect(carpeta1.getContenido()).toContain(foto1);
    expect(carpeta1.getContenido()).toContain(video1);
});

/*---------------------------------------------------------------------*/
// Obtener el tamaño de una foto, video, archivo o carpeta.
test ('Debe obtener el tamaño de una foto dentro de una carpeta', () => {
    const foto1 = new foto('foto1');
    foto1.setTamanio(10);

    expect(foto1.getTamanio()).toBe(10);
});

/*---------------------------------------------------------------------*/
//Obtener el id de un elemento dentro de una carpeta
test ('Debe  obtener el id de un elemento', () => {
    let carpetaPrueba = new carpeta('capetaFotos');
    let fotoAleatoria = new foto("vacaciones de febrero")
    fotoAleatoria.setTamanio(10);
    carpetaPrueba.agregrarElemento(fotoAleatoria);


    expect(carpetaPrueba.obtenerElementoPorid(fotoAleatoria.getId())).toBe(fotoAleatoria);
});

/*---------------------------------------------------------------------*/