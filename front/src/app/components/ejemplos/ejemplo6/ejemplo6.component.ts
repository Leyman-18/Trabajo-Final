import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/models/user';

@Component({
  selector: 'app-ejemplo6',
  templateUrl: './ejemplo6.component.html',
  styleUrls: ['./ejemplo6.component.css']
})
export class Ejemplo6Component implements OnInit {
  public listUser:usuario[] = [];

  constructor(){}

  ngOnInit(): void {
    this.agregarUsuario()
    console.log(this.listUser);
  }

  agregarUsuario(){
    this.listUser=[
      {
        nombre: 'andres',
        fechaN: new Date("2000-01-07"),
        cargo: 'estudiante',
        salario: 300000,
      },
      {
        nombre: 'lina',
        fechaN: new Date("2001-05-12"),
        cargo: 'docente',
        salario: 3000000,
      }
    ]
  }
}
