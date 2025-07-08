import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
constructor(private serv : ProductService){}
  products:Product[]=[]

  ngOnInit(){
      

    this.products = this.serv.getAll();
  }
}
