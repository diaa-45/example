import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [CommonModule , RouterModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  cats : Category[]=[];
  constructor(private serv : ProductService){}
  
  ngOnInit(){
    this.cats= this.serv.getAllCat();
/*     console.log(this.cats.length);
 */    
  }
}
