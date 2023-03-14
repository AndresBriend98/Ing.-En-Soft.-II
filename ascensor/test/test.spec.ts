import { ascensor } from '../src/ascensor';


test('Debe ir del piso 0 al piso 1', () => {
  let assesor1 = new ascensor();
  expect(1).toBe(assesor1.irAPiso(1));
});


test('Debe ir del piso 0 al piso 5', () => {
    let as1 = new ascensor();
    expect(5).toBe(as1.irAPiso(5));
});


test('Debe obtener lo', () => {

    let as1 = new ascensor();
    as1.irAPiso(5);
    as1.irAPiso(3);
    expect([0,1,2,3,4,5,4,3]).toStrictEqual(as1.historial());

});
