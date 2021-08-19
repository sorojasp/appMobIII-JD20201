import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    redirectTo:'students',
    pathMatch:'full'
  },
  {
    path:'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path:'students',
    loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
