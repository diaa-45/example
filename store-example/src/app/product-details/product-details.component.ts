import { Component } from '@angular/core';
import { ProductApiService } from '../services/product-api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  constructor(private productService :ProductApiService,private route : ActivatedRoute){}
product : any
  ngOnInit(){
    const id =Number( this.route.snapshot.paramMap.get('id'))
    /* this.productService.getProductById(id).subscribe((data)=>{
      this.product=data
    }) */
   this.productService.getProductById(id).subscribe({
    next: (data)=>{
        this.product=data
    },
    error: ()=>{
        console.error("Error fetching Product !!!!!!!!!")
    }
   })
  }
}
