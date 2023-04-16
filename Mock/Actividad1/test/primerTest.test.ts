import { IBloque } from "../src/IBloque";
import 'reflect-metadata';
import { mock, instance, when } from 'ts-mockito';

describe('Prueba unitaria para IBloque', () => {
  it('debe crear un objeto IBloque simulado con los valores correctos', async () => {
    // crear objeto IBloque simulado
    const objasimular = mock<IBloque>();
    const simulacionIntancias = instance(objasimular);
    when(objasimular.index).thenReturn(0);
    when(objasimular.hashAnterior).thenReturn(null);
    when(objasimular.hash).thenReturn("0ce5d49a6c34a7369cdebba7df81bad47c3ca2842e7a8d92061e74e33193e55a");
    when(objasimular.nonce).thenReturn(".");
    when(objasimular.transacciones).thenReturn("genesis");
    when(objasimular.timestamp).thenReturn(new Date('2023-03-22 18:00:00.00'));
      
    expect(simulacionIntancias.hash).toEqual("0ce5d49a6c34a7369cdebba7df81bad47c3ca2842e7a8d92061e74e33193e55a");
    });
});

describe('Prueba unitaria para IBloque, BLOKE NUMERO 1', () => {
  it('debe crear un objeto IBloque simulado con los valores correctos', async () => {
    // crear objeto IBloque simulado
    const objasimular = mock<IBloque>();
    const simulacionIntancias = instance(objasimular);
    when(objasimular.index).thenReturn(1);
    when(objasimular.hashAnterior).thenReturn("0ce5d49a6c34a7369cdebba7df81bad47c3ca2842e7a8d92061e74e33193e55a");
    when(objasimular.hash).thenReturn("0eb8d45be151d8591c227a6e7987dd440a08821ed26bdaf7195409ae69be734c");
    when(objasimular.nonce).thenReturn("3");
    when(objasimular.transacciones).thenReturn("ucp");
    when(objasimular.timestamp).thenReturn(new Date('2023-03-22 21:52:00.00'));
      
    //expect(simulacionIntancias.hash).toEqual("0eb8d45be151d8591c227a6e7987dd440a08821ed26bdaf7195409ae69be734c");
    });
});

describe('Prueba unitaria para IBloque, BLOKE NUMERO 1', () => {
  it('debe crear un objeto IBloque simulado con los valores correctos', async () => {
    // crear objeto IBloque simulado
    const objasimular = mock<IBloque>();
    const simulacionIntancias = instance(objasimular);
    when(objasimular.index).thenReturn(2);
    when(objasimular.hashAnterior).thenReturn("0eb8d45be151d8591c227a6e7987dd440a08821ed26bdaf7195409ae69be734c");
    when(objasimular.hash).thenReturn("0eb8d45be151d8591c227a6e7987dd440a08821ed26bdaf7195409ae69be734c");
    when(objasimular.nonce).thenReturn("05");
    //when(objasimular.transacciones).thenReturn({"nota":9,"alumno":"Jose","profesor":"Jose","fecha":"2023-03-27 21:53:00.00","materia":"ingienieria de software II"});
    //when(objasimular.timestamp).thenReturn(new Date('2023-03-22 21:53:00.00'));
      
    //expect(simulacionIntancias.hash).toEqual("0eb8d45be151d8591c227a6e7987dd440a08821ed26bdaf7195409ae69be734c");
    });
});