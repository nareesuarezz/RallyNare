import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CochesEditPage } from './coches-edit.page';

const routes: Routes = [
  {
    path: 'escuderias-edit/:escuderiaId', 
    component: CochesEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CochesEditPageRoutingModule {}
