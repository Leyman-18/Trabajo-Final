import { Component, OnInit } from '@angular/core';
import { usuarioC } from 'src/app/models/user';

@Component({
  selector: 'app-ejemplo5',
  templateUrl: './ejemplo5.component.html',
  styleUrls: ['./ejemplo5.component.css']
})
export class Ejemplo5Component implements OnInit{

  ngOnInit(): void {
    const user = new usuarioC("andres",new Date("2000-01-07"),"estudiante",10000);
    user.viewUser()
    // console.log(user.salario)
  }
}
