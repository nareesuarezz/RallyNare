import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CochesAddPage } from './coches-add.page';

const routes: Routes = [
  {
    path: '',
    component: CochesAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CochesAddPageRoutingModule {}
