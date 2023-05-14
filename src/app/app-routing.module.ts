import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'the-archery', loadChildren: () => import('./archery/archery.module').then(m => m.ArcheryModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
