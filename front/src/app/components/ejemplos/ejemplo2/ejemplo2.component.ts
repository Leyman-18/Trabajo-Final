import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component implements OnInit {
  ngOnInit(): void {
    const sexo ='m'
    if(sexo == 'm'){
      console.log('el sexo es masculino')
    }else {
      console.log('el sexo es femenino')
    }

    let a = 20
    let b = -9


    try {
        let f = a / Math.sqrt(b)
        console.log(f)
    } catch (error) {
        console.error(error)

    } finally {
        console.log('Operación Realizada')
    }

    // let i=1
    // while(i <= 10) {
    //     console.log(i);
    //     i++;
    // }

    
    // let j=1;

    // do {
    //     console.log(i);
    //     i++;
    // } while (j<=10)

    let numero: number = 10
    
    const factorial = (num: number) => {
      let i=1
      let fact = 1
      do{
        i++
        fact = fact*i
      }while(i<numero)
      return fact
    }

    console.log(factorial(numero))


  }
}
