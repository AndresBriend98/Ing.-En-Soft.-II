export 

class ascensor {

  pisoActual: number;
  historialPisos: number[];

  constructor() {
    this.pisoActual = 0;
    this.historialPisos = [0];
  }

  irAPiso(piso: number): number {
    while (this.pisoActual < piso) {
      this.pisoActual++;
      this.historialPisos.push(this.pisoActual);
      
     }
    while (this.pisoActual > piso) {
      this.pisoActual--;
      this.historialPisos.push(this.pisoActual);
      
    }
    return this.pisoActual = piso;
  }

  estaEn(): number {
    return this.pisoActual;
  }

  historial(): number[]{
    return this.historialPisos;
}
}
