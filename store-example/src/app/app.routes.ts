import { RouterModule, Routes } from '@angular/router';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [/* 
    {path:'products',component: CategoryProductsComponent},
    {path:'test',component: TestComponent}, */
    {path:'products',component: ProductsComponent},
    {path:'categories',component: CategoriesComponent},
    {path:'categories/:id',component: CategoryProductsComponent},
    {path:'contact',component: ContactUsComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}