import { Component, OnInit } from '@angular/core';
import { ProductV } from 'src/app/models/product';

@Component({
  selector: 'app-ejercicio1vista',
  templateUrl: './ejercicio1vista.component.html',
  styleUrls: ['./ejercicio1vista.component.css']
})
export class Ejercicio1vistaComponent implements OnInit {
  products: ProductV[] = [
    {
      name: 'Consola Xbox',
      price: 500,
      image: './assets/img/consola.jpg',
      category: 'videogame'
    },
    {
      name: 'Motocicleta',
      price: 2000,
      image: './assets/img/motocycle.jpg'
    },
    {
      name: 'Albumnes',
      price: 300,
      image: './assets/img/discos.jpg'
    },
    {
      name: 'Libros',
      price: 150,
      image: './assets/img/libros.jpg'
    },
    {
      name: 'Perro',
      price: 450,
      image: './assets/img/dog.jpg'
    },
    {
      name: 'Gafas',
      price: 320,
      image: './assets/img/sunglasses.jpg'
    }
  ]
  ngOnInit(): void {
    console.log(this.products);
  }
}
