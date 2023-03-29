import { SHA256 } from 'crypto-js';
import { mock } from 'ts-mockito';
import { createHash } from 'crypto';
import { IBloque } from "../src/IBloque";
import * as CryptoJS from 'crypto-js';


describe('Prueba unitaria para IBloque', () => {
    it('debe crear un objeto IBloque simulado con los valores correctos', async () => {
      const expectedHash = '0ce5d49a6c34a7369cdebba7df81bad47c3ca2842e7a8d92061e74e33193e55a';
      const originalToLocaleString = Date.prototype.toLocaleString;

// sobrescribir la función toLocaleString para devolver la fecha en el formato esperado
Date.prototype.toLocaleString = function () {
  return this.getFullYear() +
    '-' + ('0' + (this.getMonth() + 1)).slice(-2) +
    '-' + ('0' + this.getDate()).slice(-2) +
    ' ' + ('0' + this.getHours()).slice(-2) +
    ':' + ('0' + this.getMinutes()).slice(-2) +
    ':' + ('0' + this.getSeconds()).slice(-2) +
    '.' + (this.getMilliseconds() / 1000).toFixed(3).slice(2, 5);
};
  
      // crear objeto IBloque simulado
      const obj: IBloque = mock<IBloque>();
      obj.Index = 0;
      obj.HashAnterior = null;
      obj.nonce = "."
      obj.transacciones = "genesis";
      obj.Timestamp = new Date('2023-03-22 18:00:00.00');
      const formattedDate = obj.Timestamp.toLocaleString('es-AR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).replace(/[/:-]/g, ''); // remover caracteres no deseados
      const data = obj.Index + obj.HashAnterior + obj.nonce + obj.transacciones + formattedDate;
      obj.Hash = CryptoJS.SHA256(data).toString();
      // verificar si la propiedad Hash del objeto tiene el valor esperado

      expect(data.toString()).toEqual("0.genesis2023-03-22 18:00:00.00");
      expect(obj.Hash.toString()).toEqual(expectedHash);
    });
  });