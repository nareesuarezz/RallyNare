import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscuderiasEditPage } from './escuderias-edit.page';

const routes: Routes = [
  {
    path: 'escuderias-edit/:escuderiaId', 
    component: EscuderiasEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscuderiasEditPageRoutingModule {}
