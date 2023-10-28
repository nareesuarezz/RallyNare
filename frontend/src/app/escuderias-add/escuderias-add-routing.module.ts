import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscuderiasAddPage } from './escuderias-add.page';

const routes: Routes = [
  {
    path: '',
    component: EscuderiasAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscuderiasAddPageRoutingModule {}
