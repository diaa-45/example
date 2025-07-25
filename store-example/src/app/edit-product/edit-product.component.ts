import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductApiService } from '../services/product-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  form!: FormGroup;
  id!: number;
  showOverlay =false;
  constructor(private fb : FormBuilder, private route: ActivatedRoute,
    private productService: ProductApiService,
      private router : Router){}
  ngOnInit(){
    this.id= +this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe((data)=>{
      this.form= this.fb.group({
        title:[data.title],
        price:[data.price],
        description:[data.description],
        category:[data.category],
      })
    })
  }
  onSubmit(){
    this.productService.updateProduct(this.id,this.form.value).subscribe(()=>{
      //alert("Product has updated successfully !!");
      this.showOverlay =true;

      setTimeout(()=>{
        this.router.navigate(['/product-api']);
     },3000)
    })
  }
  ngOnDestroy(){
    console.log("componenet is destroyed ");
    
  }
}
