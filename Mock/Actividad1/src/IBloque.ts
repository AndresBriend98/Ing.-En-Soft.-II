import { sha256 } from 'crypto-hash';
import { sinon } from 'sinon';
import crypto from 'crypto';

export interface IBloque {
    Index: Number;
    Hash: String;
    HashAnterior: String | any;
    nonce: String;
    transacciones: String;
    Timestamp: Date;
  }
