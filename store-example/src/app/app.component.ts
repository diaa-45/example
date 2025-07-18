import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeddbackComponent } from './feddback/feddback.component';
import { ProductApiComponent } from './product-api/product-api.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CategoriesComponent,NavbarComponent,ContactUsComponent,FeddbackComponent,ProductApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store-example';
}
