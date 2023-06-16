import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.css']
})
export class Ejemplo3Component implements OnInit{
  ngOnInit(): void {
    const estudiante: string[] = ['andres','laura','karen']
    console.log(estudiante)

    estudiante.push('nayeli')
    console.log(estudiante)

    estudiante.pop()
    console.log(estudiante)

    estudiante.unshift('marlyn')
    console.log(estudiante)

    estudiante.shift()
    console.log(estudiante)

    estudiante.splice(1,0,'luisa')
    console.log(estudiante)
  }
}
