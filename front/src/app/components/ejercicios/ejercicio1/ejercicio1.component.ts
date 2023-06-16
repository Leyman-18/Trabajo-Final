import { Component, OnInit } from '@angular/core';
import { Product, ProductC } from 'src/app/models/product';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {
  constructor() {

  }
  ngOnInit(): void {
    const producto = new ProductC("logo",30000,'./assets/img/logo.png','Logo');
    producto.viewProduct();

    let productList: Product = {
      name: 'consola',
      price: 3000000,
      image: './assets/img/consola.jpg',
      category: 'autos',

      viewProducto() {
        console.log(`
        nombre: ${productList.name}
        precio:${productList.price}
        image:${productList.image}
        categoria:${productList.category}`)
      },
    }

    productList.viewProducto();
  }
}
