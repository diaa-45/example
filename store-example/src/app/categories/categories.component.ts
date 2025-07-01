import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  cats : Category[]=[
    {id:1 , name:"Mobiles"},
    {id:2 , name:"Books"},
  ]
}
