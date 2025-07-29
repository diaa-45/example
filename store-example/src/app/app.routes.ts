import { RouterModule, Routes } from '@angular/router';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductApiComponent } from './product-api/product-api.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [/* 
    {path:'products',component: CategoryProductsComponent},
    {path:'test',component: TestComponent}, */
    {path:'products',component: ProductsComponent},
    {path:'categories',component: CategoriesComponent},
    {path:'categories/:id',component: CategoryProductsComponent},
    {path:'contact',component: ContactUsComponent},
    {path:'product-api',component: ProductApiComponent},
    {path:'add-product',component: AddProductComponent},
    {path:'product-api/:id',component: ProductDetailsComponent},
    {path:'edit/:id',component: EditProductComponent},
    {path:'login',component: LoginComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}