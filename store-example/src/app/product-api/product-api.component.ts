import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../services/product-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-api',
  imports: [CommonModule],
  templateUrl: './product-api.component.html',
  styleUrl: './product-api.component.css'
})
export class ProductApiComponent implements OnInit{
  products : any[]=[];

  constructor(private productService : ProductApiService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      console.log(data);
      
      this.products=data;
    })
  }

 
  
}
