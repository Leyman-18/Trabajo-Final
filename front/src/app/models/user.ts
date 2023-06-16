export interface usuario {
    nombre: string;
    fechaN: Date;
    cargo: string;
    salario: number;

    // viewUser():void
    // calcularEdad():void
  }

  export class usuarioC {
    nombre: string;
    fechaN: Date;
    cargo: string;
    salario: number;

    constructor(nombre: string, fechaN: Date, cargo: string, salario: number){
        this.nombre = nombre,
        this.fechaN = fechaN,
        this.cargo = cargo,
        this.salario = salario
    }

    viewUser() {
        console.log(`
        nombre: ${this.nombre}
        edad:${this.fechaN}
        cargo:${this.cargo}
        salario:${this.salario}`)
      }
  }