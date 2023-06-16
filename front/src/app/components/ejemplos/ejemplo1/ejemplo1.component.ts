import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component implements OnInit{
  ngOnInit(): void {
    // let name: string | number = 'andres rincon'
    // console.log(`bienvenido ${name}`)
    // name = 50
    // console.log(`bienvenido ${name}`)

    let persona = {
      nombre: 'andres rincon',
      cargo: 'estudiante',
      salario: 15000000
    }
    persona.nombre = 'pepito'
    console.log(persona)

    //funciones
    function saludar(){
      console.log('bienvenido a Uniguajira')
    }

    saludar()

    function saludar1(name: string){
      console.log(`bienvenido a Uniguajira ${name}`)
    }

    let name = 'andres rincon'
    saludar1(name)

    function cuadrado(num: number){
      let cuad = num * num
      return cuad
    }

    let num =70
    let cuad = cuadrado(num)
    console.log(cuad)


    let cuadrad = function(num: number){
      let cuad = num * num
      return cuad
    }

    let c = cuadrad(num)
    console.log(c)
    console.log(cuadrad)

    //otra forma
    const operacion = (num: number) => {
      num*num
    }
    console.log(operacion)

    //asiganar el nombre de una persona y la edad y mostrarlo por consola por medio de funtion arrow
     const person = (name: string, age: number) => (`nombre: ${name} y edad: ${age}`)
     
     console.log(person('andres',18))
    // console.log('andres',19)
     


  }
}
