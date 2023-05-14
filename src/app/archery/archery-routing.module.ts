import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArcheryComponent } from './archery.component';

const routes: Routes = [{ path: '', component: ArcheryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArcheryRoutingModule { }
