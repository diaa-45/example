import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../services/product-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-api',
  imports: [CommonModule,RouterModule],
  templateUrl: './product-api.component.html',
  styleUrl: './product-api.component.css'
})
export class ProductApiComponent implements OnInit{
  products : any[]=[];

  constructor(private productService : ProductApiService,private router: Router){}

  ngOnInit(): void {
      this.loadProducts();
      console.log("component is initialize");
      
    }

  loadProducts(){
      this.productService.getProducts().subscribe(data=>{
      console.log(data);
      
      this.products=data
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
 ngOnDestroy(){
    console.log("componenet is destroyed ");
    
  }
}

