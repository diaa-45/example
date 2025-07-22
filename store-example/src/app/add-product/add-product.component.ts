import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../services/product-api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  constructor(private productService : ProductApiService, private fb : FormBuilder,private router: Router){}
  form! : FormGroup;

  ngOnInit(){ // ngOninit  // ngOnInt
    this.form = this.fb.group({
      t:['',Validators.required],
      p:[0,Validators.required],
      d:[''],
      image:['image.png'],
      c:['Laptops'],
    })
  }
  addedProduct :any =null;
  onSubmit(){
    if(this.form.valid){
      this.productService.addProduct(this.form.value).subscribe(()=>{
        //alert("Data added ")
        this.addedProduct= this.form.value;
        setTimeout(()=>{
          this.router.navigate(['/product-api'])
        },5000)
      })
    }
  }

}
