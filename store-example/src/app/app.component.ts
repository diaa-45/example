import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CategoriesComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store-example';
}
