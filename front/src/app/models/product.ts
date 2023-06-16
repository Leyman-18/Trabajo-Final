export interface Product{
  name: string;
  price: number;
  image: string;
  category: string;

  viewProducto():void
}

export interface ProductV{
  name: string;
  price: number;
  image: string;
  category?: string;

}


export class ProductC{
  name: string;
  price: number;
  image: string;
  category: string;

  constructor(name: string,price: number,img:string,category: string){
    this.name = name;
    this.price = price;
    this.image = img;
    this.category = category;
  }

  viewProduct() {
    console.log(`
    nombre: ${this.name}
    precio:${this.price}
    imagen:${this.image}
    categoria:${this.category}`)
  }
}
