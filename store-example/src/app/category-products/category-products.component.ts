import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { routes } from '../app.routes';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  imports: [CommonModule ,RouterModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent implements OnInit{
  
  constructor(private serv : ProductService, private route : ActivatedRoute){}
  products: Product[]=[]

  ngOnInit(){
      this.route.params.subscribe(params=>{
       this.products= this.serv.getProductsByCategory(+params['id'])
    })

  }
}
