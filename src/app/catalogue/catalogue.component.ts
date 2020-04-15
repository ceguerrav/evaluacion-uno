import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from '../models/product.model';
import {PRODUCTS} from '../models/products';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  @Output() addedProduct = new EventEmitter<Product>();

  products = PRODUCTS;
  selectedProduct: Product;

  constructor() { }
  
  ngOnInit(): void {
  }

  addProduct(product: Product){
    console.log('Se selecciona producto: '+ product.id);
    const index = this.products.indexOf(product);
    console.log('index producto: '+ index);
    product.quantity = 1;
    console.log('Cantidad: '+ product.quantity);

    if ( product.id !== null) 
      this.addedProduct.emit(product);
      this.selectedProduct = product;
      
    if (index >= 0)
      this.products[index] = product;
  }
}

