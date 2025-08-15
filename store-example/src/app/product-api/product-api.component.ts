import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../services/product-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-api',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './product-api.component.html',
  styleUrl: './product-api.component.css'
})
export class ProductApiComponent implements OnInit{
  products : any[]=[];
  skip = 0;
  limit = 4;
  search = '';
  lengthOfProducts = 0;
  searchLength =0;
  constructor(private productService : ProductApiService,private router: Router){}

  ngOnInit(): void {
      this.getLength();
      this.loadProducts();
      console.log("component is initialize");
      
    }

  loadProducts(){
      this.productService.getProducts(this.skip,this.limit,this.search).subscribe(data=>{
      
      this.products=data
    })
  }

 
  getLength(){
      this.productService.getFullProducts(this.search).subscribe(data=>{
      console.log(data.length);
      this.products=data
      this.lengthOfProducts=data.length
    })
  }
Deleteing(id : number){
  if(confirm('Are you sure you want to delete this product ??')){

    this.productService.deleteProduct(id).subscribe(()=>{
      alert('Product deleted successfully');
      setTimeout(()=>{
          this.router.navigate(['/categories'])
        },5000)
    })
  }
}

edit(id: number){
  this.router.navigate(['/edit',id])
}
prevPage(){
  if(this.skip==0) return
  this.skip = this.skip - 4;
  this.limit = this.limit
  this.loadProducts();
}
nextPage(){
  this.skip = this.skip + 4;
  this.limit = this.limit
  this.loadProducts();
}
 ngOnDestroy(){
    console.log("componenet is destroyed ");
    
  }
}

