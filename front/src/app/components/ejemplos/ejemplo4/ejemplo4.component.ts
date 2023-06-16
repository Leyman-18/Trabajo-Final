import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/models/user';
// import { Moment } from 'moment';
import * as moment from 'moment';

// var moment = require('moment')

@Component({
  selector: 'app-ejemplo4',
  templateUrl: './ejemplo4.component.html',
  styleUrls: ['./ejemplo4.component.css']
})
export class Ejemplo4Component implements OnInit{

  ngOnInit(): void {

    let listUser: usuario = {
      nombre: 'andres',
      // edad: 18,
      fechaN: new Date('2000-01-07'),
      cargo: 'estudiante',
      salario: 1000000,
      // viewUser() {
      //   console.log(`
      //   nombre: ${listUser.nombre}
      //   edad:${listUser.fechaN}
      //   cargo:${listUser.cargo}
      //   salario:${listUser.salario}`)
      // },
      // calcularEdad() {
      //   let edad=moment().diff(listUser.fechaN,'years');
      //   return edad;
      // },
      
      
    }

    // let calcularEdad = (listUser: usuario)=>{
    //   let edad=moment().diff(listUser.fechaN,'years');
    //   return edad;
    // }
    
    // listUser.nombre = 'luisa'
    // listUser.viewUser()
    // console.log(listUser.calcularEdad())

    // console.log(calcularEdad(listUser))
    
  }

}
