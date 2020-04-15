import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'Bienvenido a ACME';
  hiddenContent: boolean = true;

  shoppingProducts: Array<Product> = [];

  getHiddenCatalogue(hidden: boolean){
    console.log('hidden es: '+ hidden)
    this.hiddenContent = hidden;
  }

  onAddedProducts(product: Product){
    console.log('Se agrega al carro producto: '+ product.id)
    if ( product.id !== null){
      this.shoppingProducts.push(product);
    }
  }

  ngOnInit () {
  }
  

  
  deleteRow(product: Product){
    console.log('Se quita producto: '+ product.id)
    const index = this.shoppingProducts.indexOf(product);
    console.log('index producto: '+ index)
    if ( index !== null)
      this.shoppingProducts.splice(index, 1);
  }
}
