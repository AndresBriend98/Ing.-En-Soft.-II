import { archivo } from "../src/archivo";
import { foto } from "../src/foto";
import { video } from "../src/video";
import { carpeta } from "../src/carpeta";


test('Debe crear una carpeta', () => {
    const expeted = new carpeta('carpeta1');
    const result = new carpeta('carpeta1');

    expect(result.getNombre()).toEqual(expeted.getNombre());
});


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


test ('Debe obtener el tamaño de una foto', () => {
    const carpeta1 = new carpeta('carpeta1');
    const foto1 = new foto('foto1');

    carpeta1.agregrarElemento(foto1);

    expect(carpeta1.getTamaño()).toEqual(foto1.getTamaño());

});

