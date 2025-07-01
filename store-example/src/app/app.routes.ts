import { RouterModule, Routes } from '@angular/router';
import { CategoryProductsComponent } from './category-products/category-products.component';
import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
    {path:'products',component: CategoryProductsComponent},
    {path:'test',component: TestComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}